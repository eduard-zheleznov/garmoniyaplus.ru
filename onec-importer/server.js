"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const PORT = Number(process.env.PORT || 8102);
const STORE_FILE = process.env.STORE_FILE || "/opt/lumera/storage/lumera-store.json";
const UPLOAD_DIR = process.env.UPLOAD_DIR || "/opt/lumera/1c-exchange/uploads";
const BACKUP_DIR = process.env.BACKUP_DIR || "/opt/lumera/1c-exchange/backups";
const LOG_FILE = process.env.LOG_FILE || "/opt/lumera/1c-exchange/exchange.log";
const PUBLIC_UPLOAD_DIR = process.env.PUBLIC_UPLOAD_DIR || "/opt/lumera/public/uploads/1c";
const PUBLIC_UPLOAD_URL = process.env.PUBLIC_UPLOAD_URL || "/uploads/1c";
const EXCLUDED_CATEGORY_IDS_FILE = process.env.ONEC_EXCLUDED_CATEGORY_IDS_FILE || "/opt/lumera-1c/excluded-category-ids.json";
const ONEC_LOGIN = process.env.ONEC_LOGIN || "lumera1c";
const ONEC_PASSWORD = process.env.ONEC_PASSWORD || "";
const ONEC_TOKEN = process.env.ONEC_TOKEN || "";
const ONEC_FILE_LIMIT = Number(process.env.ONEC_FILE_LIMIT || 20 * 1024 * 1024);
const PRESERVE_MANUAL_FIELDS = process.env.ONEC_PRESERVE_MANUAL_FIELDS !== "0";
const RETAIL_PRICE_TYPE_HINTS = parsePriceTypeHints(process.env.ONEC_RETAIL_PRICE_TYPES, [
  "рознич",
  "retail",
]);
const WHOLESALE_PRICE_TYPE_HINTS = parsePriceTypeHints(process.env.ONEC_WHOLESALE_PRICE_TYPES, [
  "опт",
  "wholesale",
  "типовое гармония",
  "для сайта",
]);
const HIDDEN_SPEC_KEYS = new Set([
  "ВидНоменклатуры",
  "ТипНоменклатуры",
  "Полное наименование",
  "Код",
]);

ensureDir(UPLOAD_DIR);
ensureDir(BACKUP_DIR);
ensureDir(PUBLIC_UPLOAD_DIR);
ensureDir(path.dirname(LOG_FILE));

const server = http.createServer(async (req, res) => {
  try {
    await route(req, res);
  } catch (error) {
    if (error.statusCode === 401) {
      res.writeHead(401, {
        "Content-Type": "text/plain; charset=utf-8",
        "WWW-Authenticate": 'Basic realm="Lumera 1C exchange"',
      });
      res.end("Unauthorized");
      return;
    }
    await writeLog("error", "Unhandled request error", {
      path: req.url,
      error: serializeError(error),
    });
    sendJson(res, 500, { ok: false, error: "internal_error" });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  writeLog("info", "Lumera 1C exchange service started", { port: PORT }).catch(() => {});
});

async function route(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = normalizeApiPath(url.pathname);

  if (pathname === "/health") {
    requireAuth(req, url);
    sendJson(res, 200, {
      ok: true,
      service: "lumera-1c",
      storeFile: STORE_FILE,
      storeExists: fs.existsSync(STORE_FILE),
      time: new Date().toISOString(),
    });
    return;
  }

  if (pathname === "/mapping") {
    requireAuth(req, url);
    sendJson(res, 200, {
      ok: true,
      endpoint: "/api/1c/exchange",
      commerceMlModes: ["checkauth", "init", "file", "import"],
      jsonEndpoint: "/api/1c/import-json",
      updatedBy1C: [
        "externalId",
        "sku",
        "title",
        "categoryId",
        "price",
        "retailPrice",
        "wholesalePrice",
        "compareAtPrice",
        "stock",
        "status",
        "volume",
        "gallery",
        "skinTypes",
        "textures",
        "concerns",
        "ingredients",
        "specs",
      ],
      preservedOnSite: [
        "manual descriptions when already filled",
        "seo fields",
        "admin/site design settings",
        "manual page blocks",
        "unknown custom fields",
      ],
    });
    return;
  }

  if (pathname === "/logs") {
    requireAuth(req, url);
    const limit = Math.min(Number(url.searchParams.get("limit") || 50), 300);
    sendJson(res, 200, { ok: true, logs: readLogs(limit) });
    return;
  }

  if (pathname === "/import-json" && req.method === "POST") {
    requireAuth(req, url);
    const payload = JSON.parse((await readBody(req, ONEC_FILE_LIMIT)).toString("utf8"));
    const result = await importPayload(payload, {
      source: "json",
      dryRun: url.searchParams.get("dryRun") === "1",
      full: url.searchParams.get("full") === "1",
    });
    sendJson(res, 200, result);
    return;
  }

  if (pathname === "/import-xml" && req.method === "POST") {
    requireAuth(req, url);
    const body = decodeXmlBuffer(await readBody(req, ONEC_FILE_LIMIT));
    const payload = parseCommerceMl(body, null);
    const result = await importPayload(payload, {
      source: "xml-direct",
      dryRun: url.searchParams.get("dryRun") === "1",
      full: url.searchParams.get("full") === "1",
    });
    sendJson(res, 200, result);
    return;
  }

  if (pathname === "/exchange") {
    await handleCommerceMlExchange(req, res, url);
    return;
  }

  sendJson(res, 404, { ok: false, error: "not_found" });
}

async function handleCommerceMlExchange(req, res, url) {
  const mode = url.searchParams.get("mode") || "";
  const type = url.searchParams.get("type") || "catalog";

  if (mode === "checkauth") {
    requireAuth(req, url);
    const sessionId = createSession();
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Set-Cookie": `lumera_1c_session=${sessionId}; Path=/api/1c; HttpOnly; SameSite=Lax`,
    });
    res.end(`success\nlumera_1c_session\n${sessionId}`);
    return;
  }

  requireAuth(req, url);
  const sessionId = getSessionId(req) || "default";

  if (mode === "init") {
    resetDir(getSessionDir(sessionId));
    sendText(res, 200, `zip=no\nfile_limit=${ONEC_FILE_LIMIT}`);
    return;
  }

  if (mode === "file") {
    const filename = sanitizeUploadName(url.searchParams.get("filename") || `upload-${Date.now()}.bin`);
    const body = await readBody(req, ONEC_FILE_LIMIT);
    const target = path.join(getSessionDir(sessionId), filename);
    ensureDir(path.dirname(target));
    fs.appendFileSync(target, body);
    await writeLog("info", "1C file chunk received", {
      type,
      sessionId,
      filename,
      bytes: body.length,
    });
    sendText(res, 200, "success");
    return;
  }

  if (mode === "import") {
    const filename = sanitizeUploadName(url.searchParams.get("filename") || "");
    const filePath = path.join(getSessionDir(sessionId), filename);
    if (!filename || !fs.existsSync(filePath)) {
      sendText(res, 400, `failure\nFile not found: ${filename}`);
      return;
    }

    if (/\.(xml|txt)$/i.test(filename)) {
      const xml = decodeXmlBuffer(fs.readFileSync(filePath));
      const payload = parseCommerceMl(xml, getSessionDir(sessionId));
      const result = await importPayload(payload, {
        source: `commerceml:${filename}`,
        dryRun: url.searchParams.get("dryRun") === "1",
        full: url.searchParams.get("full") === "1",
      });
      sendText(res, 200, result.ok ? "success" : `failure\n${result.error || "Import failed"}`);
      return;
    }

    await writeLog("info", "1C binary file stored", { type, sessionId, filename });
    sendText(res, 200, "success");
    return;
  }

  if (mode === "query") {
    sendText(res, 200, "success\n");
    return;
  }

  sendText(res, 400, `failure\nUnsupported mode: ${mode}`);
}

async function importPayload(payload, options) {
  const startedAt = Date.now();
  const source = options.source || "unknown";
  const dryRun = Boolean(options.dryRun);
  const full = Boolean(options.full);

  const store = readStore();
  prepareStoreFor1C(store);

  const before = {
    products: Array.isArray(store.products) ? store.products.length : 0,
    categories: Array.isArray(store.categories) ? store.categories.length : 0,
  };

  const stats = {
    categoriesCreated: 0,
    categoriesUpdated: 0,
    productsCreated: 0,
    productsUpdated: 0,
    productsHidden: 0,
    imagesCopied: 0,
    warnings: [],
  };
  addPayloadDiagnostics(payload, stats, source);

  const categoryMap = upsertCategories(store, payload.categories || [], stats);
  const seenExternalIds = new Set();

  for (const incoming of payload.products || []) {
    const normalized = normalizeIncomingProduct(incoming, categoryMap, stats);
    if (!normalized.externalId && !normalized.sku) {
      stats.warnings.push(`Товар без externalId и артикула пропущен: ${normalized.title || "без названия"}`);
      continue;
    }
    if (normalized.externalId) {
      seenExternalIds.add(normalized.externalId);
    }
    upsertProduct(store, normalized, stats);
  }

  applyCategoryHierarchyVisibility(store, stats);

  if (full) {
    for (const product of store.products) {
      if (product.externalId && product.source === "1c" && !seenExternalIds.has(product.externalId)) {
        product.status = "draft";
        product.stock = 0;
        product.updatedFrom1CAt = new Date().toISOString();
        stats.productsHidden += 1;
      }
    }
  }

  store.updatedAt = new Date().toISOString();
  store.oneC = {
    ...(store.oneC || {}),
    enabled: true,
    lastSyncAt: new Date().toISOString(),
    lastSource: source,
    lastDryRun: dryRun,
    rules: getRules(),
    stats,
  };

  const result = {
    ok: true,
    dryRun,
    source,
    full,
    before,
    after: {
      products: store.products.length,
      categories: store.categories.length,
    },
    stats,
    durationMs: Date.now() - startedAt,
  };

  if (!dryRun) {
    backupStore();
    writeStore(store);
  }

  await writeLog("info", "1C import completed", result);
  return result;
}

function addPayloadDiagnostics(payload, stats, source) {
  const products = Array.isArray(payload.products) ? payload.products : [];
  stats.productsInPayload = products.length;
  stats.categoriesInPayload = Array.isArray(payload.categories) ? payload.categories.length : 0;
  stats.productsWithPriceInPayload = products.filter((product) => numberOrNull(product.price) != null).length;
  stats.productsWithRetailPriceInPayload = products.filter((product) => numberOrNull(product.retailPrice) != null).length;
  stats.productsWithWholesalePriceInPayload = products.filter((product) => numberOrNull(product.wholesalePrice) != null).length;
  stats.priceTypesInPayload = Array.from(
    new Set(products.flatMap((product) => toStringArray(product.priceTypeNames)))
  ).slice(0, 40);
  stats.productsWithStockInPayload = products.filter((product) => numberOrNull(product.stock) != null).length;
  stats.productsWithImagesInPayload = products.filter((product) => {
    return (Array.isArray(product.gallery) && product.gallery.length) || (Array.isArray(product.images) && product.images.length) || product.image;
  }).length;
  stats.productsWithDescriptionInPayload = products.filter((product) => Boolean(stringOrNull(product.description))).length;
  stats.productsWithAttributesInPayload = products.filter((product) => {
    return product.attributes && Object.keys(product.attributes).length > 0;
  }).length;

  if (!products.length) return;

  if (
    stats.productsWithPriceInPayload === 0 &&
    stats.productsWithRetailPriceInPayload === 0 &&
    stats.productsWithWholesalePriceInPayload === 0
  ) {
    stats.warnings.push(
      `В ${source} не найдены цены. Обычно 1С должна передать offers.xml с блоками Предложение/Цена.`
    );
  }
  if (stats.productsWithStockInPayload === 0) {
    stats.warnings.push(
      `В ${source} не найдены остатки. Обычно 1С должна передать offers.xml с Количество или остатками по складам.`
    );
  }
  if (stats.productsWithImagesInPayload < products.length) {
    stats.warnings.push(
      `Картинки пришли не для всех товаров: ${stats.productsWithImagesInPayload} из ${products.length}.`
    );
  }
  if (stats.productsWithDescriptionInPayload < products.length) {
    stats.warnings.push(
      `Описания пришли не для всех товаров: ${stats.productsWithDescriptionInPayload} из ${products.length}.`
    );
  }
}

function prepareStoreFor1C(store) {
  if (!Array.isArray(store.products)) store.products = [];
  if (!Array.isArray(store.categories)) store.categories = [];
  if (!Array.isArray(store.revisions)) store.revisions = [];
  if (!store.oneC) store.oneC = {};

  for (const product of store.products) {
    if (!Object.prototype.hasOwnProperty.call(product, "externalId")) {
      product.externalId = null;
    }
    if (!product.syncPolicy) {
      product.syncPolicy = {
        source: product.source === "1c" ? "1c" : "site",
        preserveManualText: true,
      };
    }
  }

  for (const category of store.categories) {
    if (!Object.prototype.hasOwnProperty.call(category, "externalId")) {
      category.externalId = null;
    }
  }
}

function upsertCategories(store, categories, stats) {
  const map = new Map();
  for (const category of store.categories) {
    if (category.externalId) map.set(category.externalId, category.id);
    if (category.title) map.set(`title:${category.title.toLowerCase()}`, category.id);
    if (category.name) map.set(`title:${category.name.toLowerCase()}`, category.id);
  }

  const excludedCategoryIds = readExcludedCategoryIds();
  const orderedCategories = [...categories].sort((left, right) => {
    return Number(left.depth || 0) - Number(right.depth || 0);
  });

  for (const incoming of orderedCategories) {
    const externalId = stringOrNull(incoming.externalId);
    const title = stringOrNull(incoming.title || incoming.name);
    if (!externalId && !title) continue;
    const parentExternalId = stringOrNull(incoming.parentExternalId);
    const parentId = parentExternalId ? map.get(parentExternalId) || null : null;
    const branchExternalIds = [
      externalId,
      parentExternalId,
      ...toStringArray(incoming.parentExternalIds),
    ].filter(Boolean);
    const hiddenBy1CFilter = branchExternalIds.some((id) => excludedCategoryIds.has(id));
    const status = incoming.status || (hiddenBy1CFilter ? "draft" : null);

    let existing = null;
    if (externalId) existing = store.categories.find((item) => item.externalId === externalId);
    if (!existing && title) {
      existing = store.categories.find((item) => normalizeText(item.title || item.name) === normalizeText(title));
    }

    if (existing) {
      if (externalId && !existing.externalId) existing.externalId = externalId;
      if (title && (!PRESERVE_MANUAL_FIELDS || existing.source === "1c")) existing.title = title;
      if (parentExternalId) existing.parentExternalId = parentExternalId;
      else delete existing.parentExternalId;
      if (parentId) existing.parentId = parentId;
      else delete existing.parentId;
      existing.depth = Number(incoming.depth || 0);
      existing.path = toStringArray(incoming.path);
      if (status) existing.status = status;
      existing.source = existing.source || "1c";
      if (hiddenBy1CFilter || status === "draft") existing.hiddenBy1CFilter = true;
      else if (existing.hiddenBy1CFilter) delete existing.hiddenBy1CFilter;
      existing.updatedFrom1CAt = new Date().toISOString();
      stats.categoriesUpdated += 1;
      map.set(externalId || `title:${title.toLowerCase()}`, existing.id);
      continue;
    }

    const id = uniqueId(store.categories, "category", slugify(title || externalId));
    const newCategory = {
      id,
      externalId,
      slug: uniqueSlug(store.categories, title || externalId),
      title: title || externalId,
      description: "",
      sortOrder: store.categories.length + 1,
      parentId: parentId || undefined,
      parentExternalId: parentExternalId || undefined,
      depth: Number(incoming.depth || 0),
      path: toStringArray(incoming.path),
      source: "1c",
      status: status || "published",
      hiddenBy1CFilter: hiddenBy1CFilter || status === "draft" ? true : undefined,
      createdFrom1CAt: new Date().toISOString(),
      updatedFrom1CAt: new Date().toISOString(),
    };
    store.categories.push(newCategory);
    stats.categoriesCreated += 1;
    map.set(externalId || `title:${newCategory.title.toLowerCase()}`, id);
  }

  return map;
}

function applyCategoryHierarchyVisibility(store, stats) {
  const categories = Array.isArray(store.categories) ? store.categories : [];
  const products = Array.isArray(store.products) ? store.products : [];
  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const childrenByParent = new Map();
  const excludedCategoryIds = readExcludedCategoryIds();

  for (const category of categories) {
    if (!category.parentId) continue;
    if (!childrenByParent.has(category.parentId)) childrenByParent.set(category.parentId, []);
    childrenByParent.get(category.parentId).push(category.id);
  }

  const hiddenBranchCache = new Map();
  const isHiddenBranch = (category) => {
    if (!category) return false;
    if (hiddenBranchCache.has(category.id)) return hiddenBranchCache.get(category.id);
    const hidden = Boolean(
      category.hiddenBy1CFilter ||
        (category.externalId && excludedCategoryIds.has(category.externalId)) ||
        isHiddenBranch(categoryById.get(category.parentId))
    );
    hiddenBranchCache.set(category.id, hidden);
    return hidden;
  };

  stats.categoriesHiddenByFilter = 0;
  stats.categoriesHiddenAsEmpty = 0;
  stats.productsHiddenByCategory = 0;

  for (const category of categories) {
    if (category.source !== "1c") continue;
    if (isHiddenBranch(category)) {
      if (category.status !== "draft") stats.categoriesHiddenByFilter += 1;
      category.status = "draft";
      category.hiddenBy1CFilter = true;
    } else if (category.hiddenBy1CFilter) {
      delete category.hiddenBy1CFilter;
    }
  }

  for (const product of products) {
    const category = categoryById.get(product.categoryId);
    product.categoryPathIds = category ? collectCategoryPathIds(category, categoryById) : [];
    if (!category || !isHiddenBranch(category)) continue;
    if (product.status !== "draft") stats.productsHiddenByCategory += 1;
    product.status = "draft";
    product.hiddenBy1CFilter = true;
    product.updatedFrom1CAt = new Date().toISOString();
  }

  const directProductCounts = new Map();
  for (const product of products) {
    if (product.status === "draft") continue;
    if (!product.categoryId) continue;
    directProductCounts.set(product.categoryId, (directProductCounts.get(product.categoryId) || 0) + 1);
  }

  const subtreeCountCache = new Map();
  const countSubtreeProducts = (categoryId) => {
    if (subtreeCountCache.has(categoryId)) return subtreeCountCache.get(categoryId);
    let total = directProductCounts.get(categoryId) || 0;
    for (const childId of childrenByParent.get(categoryId) || []) {
      total += countSubtreeProducts(childId);
    }
    subtreeCountCache.set(categoryId, total);
    return total;
  };

  for (const category of categories) {
    if (category.source !== "1c") continue;
    const count = countSubtreeProducts(category.id);
    category.productCount = directProductCounts.get(category.id) || 0;
    category.subtreeProductCount = count;
    if (!isHiddenBranch(category) && count > 0) {
      category.status = "published";
      delete category.hiddenAsEmpty;
    } else if (!isHiddenBranch(category)) {
      if (category.status !== "draft") stats.categoriesHiddenAsEmpty += 1;
      category.status = "draft";
      category.hiddenAsEmpty = true;
    }
  }
}

function collectCategoryPathIds(category, categoryById) {
  const ids = [];
  let current = category;
  const guard = new Set();
  while (current && !guard.has(current.id)) {
    guard.add(current.id);
    ids.unshift(current.id);
    current = categoryById.get(current.parentId);
  }
  return ids;
}

function isGuidLike(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(value || "").trim());
}

function upsertProduct(store, incoming, stats) {
  let existing = null;
  if (incoming.externalId) {
    existing = store.products.find((item) => item.externalId === incoming.externalId);
  }
  if (!existing && incoming.sku) {
    existing = store.products.find((item) => item.sku && normalizeText(item.sku) === normalizeText(incoming.sku));
  }

  if (!existing) {
    const id = uniqueId(store.products, "product", slugify(incoming.title || incoming.sku || incoming.externalId));
    const slug = uniqueSlug(store.products, incoming.title || incoming.sku || incoming.externalId);
    store.products.push({
      id,
      slug,
      categoryId: incoming.categoryId || fallbackCategoryId(store),
      status: incoming.status || "published",
      sku: incoming.sku || "",
      externalId: incoming.externalId || null,
      title: incoming.title || incoming.sku || incoming.externalId,
      subtitle: incoming.subtitle || "",
      shortDescription: incoming.shortDescription || "",
      description: incoming.description || "",
      price: numberOrZero(incoming.retailPrice ?? incoming.price ?? incoming.wholesalePrice),
      retailPrice: numberOrNull(incoming.retailPrice),
      wholesalePrice: numberOrNull(incoming.wholesalePrice),
      priceTypeNames: incoming.priceTypeNames || [],
      compareAtPrice: numberOrNull(incoming.compareAtPrice),
      rating: incoming.rating || 5,
      volume: incoming.volume || "",
      stock: numberOrZero(incoming.stock),
      badge: incoming.badge || "",
      isFeatured: false,
      isNew: false,
      skinTypes: incoming.skinTypes || [],
      textures: incoming.textures || [],
      concerns: incoming.concerns || [],
      ingredients: incoming.ingredients || [],
      features: incoming.features || [],
      usage: incoming.usage || [],
      specs: incoming.specs || {},
      crossSellIds: [],
      image: incoming.image || firstArrayValue(incoming.gallery) || "",
      gallery: incoming.gallery || [],
      seoTitle: incoming.title || "",
      seoDescription: incoming.shortDescription || incoming.description || "",
      source: "1c",
      hiddenBy1CFilter: incoming.status === "draft" ? true : undefined,
      syncPolicy: {
        source: "1c",
        preserveManualText: true,
      },
      createdFrom1CAt: new Date().toISOString(),
      updatedFrom1CAt: new Date().toISOString(),
    });
    stats.productsCreated += 1;
    return;
  }

  const textWasManual = existing.source !== "1c" && existing.syncPolicy?.preserveManualText !== false;
  const existingTitleLooksTechnical = isGuidLike(existing.title);
  existing.externalId = incoming.externalId || existing.externalId || null;
  existing.sku = incoming.sku || existing.sku || "";
  existing.categoryId = incoming.categoryId || existing.categoryId || fallbackCategoryId(store);
  existing.status = incoming.status || existing.status || "published";
  if (incoming.status === "draft") existing.hiddenBy1CFilter = true;
  if (incoming.retailPrice != null) existing.retailPrice = incoming.retailPrice;
  if (incoming.wholesalePrice != null) existing.wholesalePrice = incoming.wholesalePrice;
  if (incoming.priceTypeNames?.length) existing.priceTypeNames = incoming.priceTypeNames;
  existing.price = numberOrZero(incoming.retailPrice ?? incoming.price ?? incoming.wholesalePrice, existing.price);
  existing.compareAtPrice = numberOrNull(incoming.compareAtPrice, existing.compareAtPrice);
  existing.stock = numberOrZero(incoming.stock, existing.stock);
  existing.volume = incoming.volume || existing.volume || "";
  existing.gallery = incoming.gallery?.length ? mergeGallery(existing.gallery, incoming.gallery) : existing.gallery || [];
  if (incoming.image || existing.gallery?.[0]) {
    const nextImage = incoming.image || existing.gallery?.[0] || "";
    if (!existing.image || existing.source === "1c") existing.image = nextImage;
  }
  existing.skinTypes = incoming.skinTypes?.length ? incoming.skinTypes : existing.skinTypes || [];
  existing.textures = incoming.textures?.length ? incoming.textures : existing.textures || [];
  existing.concerns = incoming.concerns?.length ? incoming.concerns : existing.concerns || [];
  existing.ingredients = incoming.ingredients?.length ? incoming.ingredients : existing.ingredients || [];
  existing.specs = Object.keys(incoming.specs || {}).length ? { ...(existing.specs || {}), ...incoming.specs } : existing.specs || {};
  existing.source = existing.source || "site";
  existing.syncPolicy = existing.syncPolicy || { source: existing.source, preserveManualText: true };
  existing.updatedFrom1CAt = new Date().toISOString();

  if (!PRESERVE_MANUAL_FIELDS || !textWasManual || !existing.title || existingTitleLooksTechnical) existing.title = incoming.title || existing.title;
  if (!PRESERVE_MANUAL_FIELDS || !textWasManual || !existing.description) existing.description = incoming.description || existing.description || "";
  if (!PRESERVE_MANUAL_FIELDS || !textWasManual || !existing.shortDescription) {
    existing.shortDescription = incoming.shortDescription || existing.shortDescription || "";
  }
  if (!existing.seoTitle || isGuidLike(existing.seoTitle)) existing.seoTitle = existing.title;
  if (!existing.seoDescription) existing.seoDescription = existing.shortDescription || existing.description || "";

  stats.productsUpdated += 1;
}

function normalizeIncomingProduct(incoming, categoryMap, stats) {
  const attrs = incoming.attributes || {};
  const categoryExternalId = stringOrNull(incoming.categoryExternalId);
  const categoryName = stringOrNull(incoming.categoryName);
  let categoryId = incoming.categoryId || null;
  if (!categoryId && categoryExternalId) categoryId = categoryMap.get(categoryExternalId);
  if (!categoryId && categoryName) categoryId = categoryMap.get(`title:${categoryName.toLowerCase()}`);

  const gallery = [];
  for (const image of incoming.gallery || incoming.images || []) {
    if (!image) continue;
    const copied = copyImageIfLocal(image, incoming._sessionDir);
    if (copied.copied) stats.imagesCopied += 1;
    gallery.push(copied.url);
  }

  const specs = { ...(incoming.specs || {}) };
  for (const [key, value] of Object.entries(attrs)) {
    if (value == null || value === "") continue;
    if (HIDDEN_SPEC_KEYS.has(key)) continue;
    specs[key] = Array.isArray(value) ? value.join(", ") : String(value);
  }

  return {
    externalId: stringOrNull(incoming.externalId),
    sku: stringOrNull(incoming.sku),
    title: stringOrNull(incoming.title || incoming.name),
    subtitle: stringOrNull(incoming.subtitle),
    shortDescription: stringOrNull(incoming.shortDescription),
    description: stringOrNull(incoming.description),
    price: numberOrNull(incoming.price),
    retailPrice: numberOrNull(incoming.retailPrice),
    wholesalePrice: numberOrNull(incoming.wholesalePrice),
    priceTypeNames: toStringArray(incoming.priceTypeNames),
    compareAtPrice: numberOrNull(incoming.compareAtPrice || incoming.oldPrice),
    stock: numberOrNull(incoming.stock),
    status: incoming.status || (Number(incoming.stock) === 0 ? "published" : "published"),
    volume: stringOrNull(incoming.volume || attrs["Объем"] || attrs["Объём"] || attrs["Формат"]),
    badge: stringOrNull(incoming.badge),
    categoryId,
    image: stringOrNull(incoming.image) || firstArrayValue(gallery),
    gallery,
    skinTypes: toStringArray(incoming.skinTypes || attrs["Тип кожи"]),
    textures: toStringArray(incoming.textures || attrs["Текстура"]),
    concerns: toStringArray(incoming.concerns || attrs["Задача"] || attrs["Назначение"]),
    ingredients: toStringArray(incoming.ingredients || attrs["Ингредиенты"] || attrs["Активы"]),
    features: toStringArray(incoming.features),
    usage: toStringArray(incoming.usage),
    specs,
  };
}

function parseCommerceMl(xml, sessionDir) {
  const propertyMap = buildPropertyMap(xml);
  const priceTypeMap = buildPriceTypeMap(xml);
  const categories = parseCommerceMlCategoryTree(xml);

  const productMap = new Map();
  const excludedCategoryIds = readExcludedCategoryIds();
  for (const item of collectXmlBlocks(xml, "Товар")) {
    const externalId = normalize1cId(extractXmlValue(item, "Ид"));
    if (!externalId) continue;
    const attributes = extractProperties(item, propertyMap);
    const categoryExternalId = firstArrayValue(extractXmlValues(extractXmlBlock(item, "Группы"), "Ид"));
    productMap.set(externalId, {
      externalId,
      sku: firstString(extractXmlValue(item, "Артикул"), attributes["Артикул"], attributes["Код"]),
      title: firstString(extractXmlValue(item, "Наименование"), attributes["Полное наименование"]),
      description: firstString(
        extractXmlValue(item, "Описание"),
        attributes["Описание"],
        attributes["Полное описание"],
        attributes["Комментарий"]
      ),
      categoryExternalId,
      status: excludedCategoryIds.has(categoryExternalId) ? "draft" : undefined,
      gallery: extractXmlValues(item, "Картинка"),
      attributes,
      _sessionDir: sessionDir,
    });
  }

  for (const offer of collectXmlBlocks(xml, "Предложение")) {
    const offerId = normalize1cId(extractXmlValue(offer, "Ид"));
    if (!offerId) continue;
    const baseId = normalize1cId(offerId.split("#")[0]);
    const product = productMap.get(baseId) || productMap.get(offerId) || {
      externalId: baseId || offerId,
      title: extractXmlValue(offer, "Наименование"),
      attributes: {},
      _sessionDir: sessionDir,
    };
    const offerAttributes = extractProperties(offer, propertyMap);
    product.attributes = { ...(product.attributes || {}), ...offerAttributes };
    const offerPrices = findOfferPrices(offer, priceTypeMap);
    product.retailPrice = offerPrices.retailPrice ?? findAttributePrice(offerAttributes, "retail") ?? product.retailPrice;
    product.wholesalePrice =
      offerPrices.wholesalePrice ?? findAttributePrice(offerAttributes, "wholesale") ?? product.wholesalePrice;
    product.price =
      product.retailPrice ??
      product.wholesalePrice ??
      offerPrices.price ??
      findAttributePrice(offerAttributes) ??
      product.price;
    product.priceTypeNames = offerPrices.priceTypeNames.length ? offerPrices.priceTypeNames : product.priceTypeNames;
    product.stock = findOfferStock(offer, offerAttributes) ?? product.stock;
    product.sku = product.sku || firstString(extractXmlValue(offer, "Артикул"), offerAttributes["Артикул"], offerAttributes["Код"]);
    product.title = product.title || extractXmlValue(offer, "Наименование");
    productMap.set(product.externalId, product);
  }

  return {
    categories: dedupeBy(categories, (item) => item.externalId || item.title),
    products: Array.from(productMap.values()),
  };
}

function parseCommerceMlCategoryTree(xml) {
  if (!xml) return [];
  const groupsBlock = xml;

  const categories = [];
  const stack = [];
  const tokenRegexp = /<(\/?)(?:[^:\s>]+:)?Группа(?:\s[^>]*)?>/gi;
  let match;

  while ((match = tokenRegexp.exec(groupsBlock))) {
    const isClosing = match[1] === "/";
    if (!isClosing) {
      const openEnd = tokenRegexp.lastIndex;
      const ownPrefix = groupsBlock.slice(openEnd, findOwnGroupPrefixEnd(groupsBlock, openEnd));
      const parent = stack[stack.length - 1] || null;
      const externalId = normalize1cId(extractXmlValue(ownPrefix, "Ид"));
      const title = stringOrNull(extractXmlValue(ownPrefix, "Наименование"));
      const category = {
        externalId,
        title,
        parent,
        depth: parent ? parent.depth + 1 : 0,
        path: [...(parent?.path || []), title || externalId].filter(Boolean),
      };
      stack.push(category);
      continue;
    }

    const category = stack.pop();
    if (!category) continue;
    if (!category.externalId && !category.title) continue;
    categories.push({
      externalId: category.externalId,
      title: category.title,
      parentExternalId: category.parent?.externalId || null,
      parentExternalIds: collectParentExternalIds(category.parent),
      depth: category.depth,
      path: category.path,
    });
  }

  return categories;
}

function findOwnGroupPrefixEnd(xml, start) {
  const nextChildren = xml.indexOf("<Группы", start);
  const nextClose = xml.indexOf("</Группа>", start);
  if (nextChildren === -1 && nextClose === -1) return Math.min(xml.length, start + 2000);
  if (nextChildren === -1) return nextClose;
  if (nextClose === -1) return nextChildren;
  return Math.min(nextChildren, nextClose);
}

function collectParentExternalIds(parent) {
  const ids = [];
  let current = parent;
  while (current) {
    if (current.externalId) ids.push(current.externalId);
    current = current.parent;
  }
  return ids;
}

function buildPropertyMap(xml) {
  const map = new Map();
  for (const property of collectXmlBlocks(xml, "Свойство")) {
    const id = extractXmlValue(property, "Ид");
    const name = extractXmlValue(property, "Наименование");
    if (id && name) map.set(id, name);
  }
  return map;
}

function extractProperties(item, propertyMap) {
  const result = {};
  const values = collectXmlBlocks(extractXmlBlock(item, "ЗначенияСвойств"), "ЗначенияСвойства");
  for (const value of values) {
    const id = extractXmlValue(value, "Ид");
    const name = propertyMap.get(id) || id;
    const propValue = extractXmlValues(value, "Значение");
    appendAttribute(result, name, propValue);
  }

  const requisites = collectXmlBlocks(extractXmlBlock(item, "ЗначенияРеквизитов"), "ЗначениеРеквизита");
  for (const requisite of requisites) {
    const name = extractXmlValue(requisite, "Наименование");
    const value = extractXmlValues(requisite, "Значение");
    appendAttribute(result, name, value);
  }
  return result;
}

function appendAttribute(target, name, value) {
  const key = stringOrNull(name);
  if (!key) return;
  const values = normalizeAttributeValues(value);
  if (!values.length) return;
  const next = values.join(", ");
  if (!target[key]) {
    target[key] = next;
    return;
  }
  const current = normalizeAttributeValues(target[key]);
  target[key] = Array.from(new Set([...current, ...values])).join(", ");
}

function normalizeAttributeValues(value) {
  if (value == null || value === "") return [];
  if (Array.isArray(value)) return value.map((item) => stringOrNull(item)).filter(Boolean);
  return [stringOrNull(value)].filter(Boolean);
}

function buildPriceTypeMap(xml) {
  const map = new Map();
  for (const priceType of collectXmlBlocks(xml, "ТипЦены")) {
    const id = normalize1cId(extractXmlValue(priceType, "Ид"));
    const name = stringOrNull(extractXmlValue(priceType, "Наименование"));
    if (id || name) map.set(id || name, { id, name });
  }
  return map;
}

function parsePriceTypeHints(value, defaults = []) {
  return new Set(
    [...defaults, ...String(value || "").split(/[;,\n]/)]
      .map((item) => normalizeText(item).replace(/ё/g, "е"))
      .filter(Boolean)
  );
}

function priceTypeMatches(priceType, hints) {
  const normalized = normalizeText([priceType?.id, priceType?.name].filter(Boolean).join(" ")).replace(/ё/g, "е");
  if (!normalized) return false;
  for (const hint of hints) {
    if (normalized === hint || normalized.includes(hint)) return true;
  }
  return false;
}

function findOfferPrices(offer, priceTypeMap = new Map()) {
  const result = {
    price: null,
    retailPrice: null,
    wholesalePrice: null,
    priceTypeNames: [],
  };
  const fallbackPrices = [];

  for (const price of collectXmlBlocks(offer, "Цена")) {
    const value = numberOrNull(extractXmlValue(price, "ЦенаЗаЕдиницу") || extractXmlValue(price, "Цена"));
    if (value == null) continue;

    const typeId = normalize1cId(extractXmlValue(price, "ИдТипаЦены"));
    const priceType = priceTypeMap.get(typeId) || { id: typeId, name: typeId };
    const typeName = stringOrNull(priceType.name || priceType.id);
    if (typeName) result.priceTypeNames.push(typeName);

    if (priceTypeMatches(priceType, RETAIL_PRICE_TYPE_HINTS)) {
      if (result.retailPrice == null) result.retailPrice = value;
      continue;
    }
    if (priceTypeMatches(priceType, WHOLESALE_PRICE_TYPE_HINTS)) {
      if (result.wholesalePrice == null) result.wholesalePrice = value;
      continue;
    }
    fallbackPrices.push(value);
  }

  result.priceTypeNames = Array.from(new Set(result.priceTypeNames));
  result.price = result.retailPrice ?? result.wholesalePrice ?? fallbackPrices[0] ?? null;
  return result;
}

function findAttributePrice(attributes, mode = "default") {
  const retail = firstString(attributes["Розничная цена"], attributes["Розн. цена"], attributes["Retail price"]);
  const wholesale = firstString(attributes["Оптовая цена"], attributes["Опт"], attributes["Wholesale price"]);
  if (mode === "retail") return numberOrNull(retail);
  if (mode === "wholesale") return numberOrNull(wholesale);
  return numberOrNull(
    firstString(
      attributes["Цена"],
      attributes["ЦенаЗаЕдиницу"],
      attributes["Цена за единицу"],
      retail,
      wholesale
    )
  );
}

function findOfferStock(offer, attributes) {
  return numberOrNull(
    firstString(
      extractXmlValue(offer, "Количество"),
      attributes["Количество"],
      attributes["Остаток"],
      attributes["ОстатокНаСкладе"],
      attributes["Остаток на складе"]
    )
  );
}

function collectXmlBlocks(xml, tag) {
  if (!xml) return [];
  const escaped = escapeRegExp(tag);
  const result = [];
  const regexp = new RegExp(`<(?:[^:\\s>]+:)?${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/(?:[^:\\s>]+:)?${escaped}>`, "gi");
  let match;
  while ((match = regexp.exec(xml))) {
    result.push(match[1]);
  }
  return result;
}

function extractXmlBlock(xml, tag) {
  return collectXmlBlocks(xml, tag)[0] || "";
}

function extractXmlValues(xml, tag) {
  return collectXmlBlocks(xml, tag).map(cleanXmlText).filter(Boolean);
}

function extractXmlValue(xml, tag) {
  return extractXmlValues(xml, tag)[0] || null;
}

function cleanXmlText(value) {
  return decodeXmlEntities(String(value || "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function decodeXmlEntities(value) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function collectByKey(input, key, out = []) {
  if (Array.isArray(input)) {
    for (const item of input) collectByKey(item, key, out);
    return out;
  }
  if (!input || typeof input !== "object") return out;
  for (const [currentKey, value] of Object.entries(input)) {
    if (currentKey === key) {
      if (Array.isArray(value)) out.push(...value);
      else out.push(value);
    }
    collectByKey(value, key, out);
  }
  return out;
}

function getValue(obj, key) {
  const value = obj?.[key];
  if (value == null) return null;
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return getValue({ value: value[0] }, "value");
  if (typeof value === "object" && value["#text"] != null) return String(value["#text"]);
  return null;
}

function firstArrayValue(value) {
  const arr = toStringArray(value);
  return arr[0] || null;
}

function firstString(...values) {
  for (const value of values) {
    const text = stringOrNull(value);
    if (text) return text;
  }
  return null;
}

function readExcludedCategoryIds() {
  try {
    if (!fs.existsSync(EXCLUDED_CATEGORY_IDS_FILE)) return new Set();
    const raw = JSON.parse(fs.readFileSync(EXCLUDED_CATEGORY_IDS_FILE, "utf8"));
    const ids = Array.isArray(raw) ? raw : raw.ids;
    return new Set((ids || []).map(stringOrNull).filter(Boolean));
  } catch (error) {
    writeLog("warn", "Failed to read excluded 1C category ids", {
      file: EXCLUDED_CATEGORY_IDS_FILE,
      error: serializeError(error),
    }).catch(() => {});
    return new Set();
  }
}

function isExcludedCategoryExternalId(externalId) {
  const id = stringOrNull(externalId);
  return id ? readExcludedCategoryIds().has(id) : false;
}

function readStore() {
  return JSON.parse(fs.readFileSync(STORE_FILE, "utf8"));
}

function writeStore(store) {
  const tmp = `${STORE_FILE}.${crypto.randomUUID()}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(store, null, 2), "utf8");
  fs.renameSync(tmp, STORE_FILE);
}

function backupStore() {
  ensureDir(BACKUP_DIR);
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  fs.copyFileSync(STORE_FILE, path.join(BACKUP_DIR, `lumera-store-${stamp}.json`));
}

async function writeLog(level, message, meta = {}) {
  const row = {
    time: new Date().toISOString(),
    level,
    message,
    meta,
  };
  await fs.promises.appendFile(LOG_FILE, `${JSON.stringify(row)}\n`, "utf8");
}

function readLogs(limit) {
  if (!fs.existsSync(LOG_FILE)) return [];
  return fs.readFileSync(LOG_FILE, "utf8").trim().split("\n").filter(Boolean).slice(-limit).map((line) => {
    try {
      return JSON.parse(line);
    } catch {
      return { raw: line };
    }
  });
}

function requireAuth(req, url) {
  if (ONEC_TOKEN && url.searchParams.get("token") === ONEC_TOKEN) return;
  const bearer = req.headers.authorization?.match(/^Bearer\s+(.+)$/i)?.[1];
  if (ONEC_TOKEN && bearer === ONEC_TOKEN) return;
  const session = getSessionId(req);
  if (session && fs.existsSync(getSessionDir(session))) return;

  const basic = req.headers.authorization?.match(/^Basic\s+(.+)$/i)?.[1];
  if (basic) {
    const [login, password] = Buffer.from(basic, "base64").toString("utf8").split(":");
    if (safeEqual(login, ONEC_LOGIN) && safeEqual(password, ONEC_PASSWORD)) return;
  }

  const error = new Error("Unauthorized");
  error.statusCode = 401;
  throw error;
}

function safeEqual(a = "", b = "") {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function createSession() {
  const sessionId = crypto.randomBytes(24).toString("hex");
  ensureDir(getSessionDir(sessionId));
  return sessionId;
}

function getSessionId(req) {
  const cookie = req.headers.cookie || "";
  const match = cookie.match(/(?:^|;\s*)lumera_1c_session=([^;]+)/);
  return match ? sanitizeUploadName(decodeURIComponent(match[1])) : null;
}

function getSessionDir(sessionId) {
  return path.join(UPLOAD_DIR, sanitizeUploadName(sessionId));
}

function readBody(req, maxBytes) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on("data", (chunk) => {
      total += chunk.length;
      if (total > maxBytes) {
        reject(new Error("Payload is too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function decodeXmlBuffer(buffer) {
  const head = buffer.slice(0, 300).toString("latin1").toLowerCase();
  if (head.includes("windows-1251") || head.includes("cp1251")) {
    return new TextDecoder("windows-1251").decode(buffer);
  }
  const utf8 = buffer.toString("utf8");
  if (utf8.includes("<КоммерческаяИнформация") || utf8.includes("<Товар") || !utf8.includes("�")) {
    return utf8;
  }
  try {
    const cp1251 = new TextDecoder("windows-1251").decode(buffer);
    if (cp1251.includes("<КоммерческаяИнформация") || cp1251.includes("<Товар")) return cp1251;
  } catch {
    // Keep utf-8 fallback below.
  }
  return utf8;
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload, null, 2));
}

function sendText(res, status, text) {
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(text);
}

function normalizeApiPath(pathname) {
  return pathname.replace(/^\/api\/1c/, "") || "/";
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function resetDir(dir) {
  const resolved = path.resolve(dir);
  const root = path.resolve(UPLOAD_DIR);
  if (!resolved.startsWith(root)) throw new Error("Unsafe upload directory");
  fs.rmSync(resolved, { recursive: true, force: true });
  ensureDir(resolved);
}

function sanitizeUploadName(name) {
  return String(name).replace(/\\/g, "/").split("/").filter(Boolean).map((part) => {
    return part.replace(/[^a-zA-Z0-9а-яА-ЯёЁ._-]/g, "_").slice(0, 120);
  }).join("/");
}

function copyImageIfLocal(imagePath, sessionDir) {
  const raw = String(imagePath);
  if (/^https?:\/\//i.test(raw) || raw.startsWith("/uploads/")) return { url: raw, copied: false };
  if (!sessionDir) return { url: raw, copied: false };

  const sanitized = sanitizeUploadName(raw);
  const source = path.join(sessionDir, sanitized);
  if (!fs.existsSync(source)) return { url: raw, copied: false };

  const ext = path.extname(sanitized).toLowerCase() || ".jpg";
  const base = slugify(path.basename(sanitized, ext)) || crypto.randomBytes(6).toString("hex");
  const filename = `${base}-${crypto.createHash("sha1").update(fs.readFileSync(source)).digest("hex").slice(0, 10)}${ext}`;
  const target = path.join(PUBLIC_UPLOAD_DIR, filename);
  if (!fs.existsSync(target)) fs.copyFileSync(source, target);
  return { url: `${PUBLIC_UPLOAD_URL}/${filename}`, copied: true };
}

function getRules() {
  return {
    sourceOfTruth: "1C is source of truth for technical catalog data",
    preserveManualFields: PRESERVE_MANUAL_FIELDS,
    updatedBy1C: [
      "externalId",
      "sku",
      "title when text is not manually preserved",
      "categoryId",
      "price",
      "compareAtPrice",
      "stock",
      "status",
      "volume",
      "gallery",
      "filters",
      "specs",
    ],
    manualOnSite: ["marketing descriptions", "seo", "design", "manual page blocks"],
  };
}

function fallbackCategoryId(store) {
  return store.categories[0]?.id || "category-default";
}

function uniqueId(items, prefix, base) {
  let id = `${prefix}-${base || crypto.randomBytes(4).toString("hex")}`;
  let index = 2;
  while (items.some((item) => item.id === id)) {
    id = `${prefix}-${base}-${index++}`;
  }
  return id;
}

function uniqueSlug(items, text) {
  const base = slugify(text) || crypto.randomBytes(4).toString("hex");
  let slug = base;
  let index = 2;
  while (items.some((item) => item.slug === slug)) {
    slug = `${base}-${index++}`;
  }
  return slug;
}

function slugify(value) {
  const map = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l",
    м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "c", ч: "ch",
    ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
  };
  return String(value || "")
    .toLowerCase()
    .replace(/[а-яё]/g, (char) => map[char] || char)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function normalize1cId(value) {
  return stringOrNull(value)?.trim() || null;
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function stringOrNull(value) {
  if (value == null) return null;
  const text = String(value).trim();
  return text ? text : null;
}

function numberOrNull(value, fallback = null) {
  if (value == null || value === "") return fallback;
  const number = Number(String(value).replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(number) ? number : fallback;
}

function numberOrZero(value, fallback = 0) {
  return numberOrNull(value, fallback) ?? 0;
}

function toStringArray(value) {
  if (value == null || value === "") return [];
  if (Array.isArray(value)) return value.flatMap(toStringArray).filter(Boolean);
  if (typeof value === "object") {
    if (value["#text"] != null) return toStringArray(value["#text"]);
    return [];
  }
  return String(value).split(/[,;|]/).map((item) => item.trim()).filter(Boolean);
}

function mergeGallery(current = [], incoming = []) {
  return Array.from(new Set([...(current || []), ...(incoming || [])].filter(Boolean)));
}

function dedupeBy(items, getKey) {
  const seen = new Set();
  const result = [];
  for (const item of items) {
    const key = getKey(item);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }
  return result;
}

function serializeError(error) {
  return {
    message: error.message,
    stack: error.stack,
    statusCode: error.statusCode,
  };
}
