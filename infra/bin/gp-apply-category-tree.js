"use strict";

const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const STORE_FILE = process.env.STORE_FILE || process.argv[2] || "/opt/lumera/storage/lumera-store.json";
const XML_FILE = process.env.XML_FILE || process.argv[3] || latestImportXml();
const EXCLUDED_CATEGORY_IDS_FILE =
  process.env.ONEC_EXCLUDED_CATEGORY_IDS_FILE || "/opt/lumera-1c/excluded-category-ids.json";
const BACKUP_DIR = process.env.BACKUP_DIR || "/opt/lumera/1c-exchange/backups";

if (!STORE_FILE || !fs.existsSync(STORE_FILE)) {
  throw new Error(`Store file not found: ${STORE_FILE}`);
}
if (!XML_FILE || !fs.existsSync(XML_FILE)) {
  throw new Error(`1C import XML not found: ${XML_FILE || "(empty)"}`);
}

const store = JSON.parse(fs.readFileSync(STORE_FILE, "utf8"));
if (!Array.isArray(store.categories)) store.categories = [];
if (!Array.isArray(store.products)) store.products = [];

const xml = decodeXmlBuffer(fs.readFileSync(XML_FILE));
const incomingCategories = parseCommerceMlCategoryTree(xml);
const excludedCategoryIds = readExcludedCategoryIds();

const stats = {
  xmlFile: XML_FILE,
  categoriesInTree: incomingCategories.length,
  categoriesCreated: 0,
  categoriesUpdated: 0,
  categoriesHiddenByFilter: 0,
  categoriesHiddenAsEmpty: 0,
  productsHiddenByCategory: 0,
  productsWithCategoryPath: 0,
};

upsertCategories(store, incomingCategories, stats);
applyCategoryHierarchyVisibility(store, stats);

store.updatedAt = new Date().toISOString();
store.oneC = {
  ...(store.oneC || {}),
  categoryTreeAppliedAt: new Date().toISOString(),
  categoryTreeSource: XML_FILE,
  categoryTreeStats: stats,
};

backupStore();
writeStore(store);
console.log(JSON.stringify(stats, null, 2));

function upsertCategories(store, categories, stats) {
  const map = new Map();
  for (const category of store.categories) {
    if (category.externalId) map.set(category.externalId, category.id);
    if (category.title) map.set(`title:${category.title.toLowerCase()}`, category.id);
  }

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

    let existing = null;
    if (externalId) existing = store.categories.find((item) => item.externalId === externalId);
    if (!existing && title) {
      existing = store.categories.find((item) => normalizeText(item.title || item.name) === normalizeText(title));
    }

    if (existing) {
      if (externalId && !existing.externalId) existing.externalId = externalId;
      if (title && existing.source === "1c") existing.title = title;
      if (parentExternalId) existing.parentExternalId = parentExternalId;
      else delete existing.parentExternalId;
      if (parentId) existing.parentId = parentId;
      else delete existing.parentId;
      existing.depth = Number(incoming.depth || 0);
      existing.path = toStringArray(incoming.path);
      existing.source = existing.source || "1c";
      if (hiddenBy1CFilter) existing.hiddenBy1CFilter = true;
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
      status: hiddenBy1CFilter ? "draft" : "published",
      hiddenBy1CFilter: hiddenBy1CFilter || undefined,
      createdFrom1CAt: new Date().toISOString(),
      updatedFrom1CAt: new Date().toISOString(),
    };
    store.categories.push(newCategory);
    stats.categoriesCreated += 1;
    map.set(externalId || `title:${newCategory.title.toLowerCase()}`, id);
  }
}

function applyCategoryHierarchyVisibility(store, stats) {
  const categories = store.categories;
  const products = store.products;
  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const childrenByParent = new Map();

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
    if (product.categoryPathIds.length) stats.productsWithCategoryPath += 1;
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

function parseCommerceMlCategoryTree(xml) {
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

function collectParentExternalIds(parent) {
  const ids = [];
  let current = parent;
  while (current) {
    if (current.externalId) ids.push(current.externalId);
    current = current.parent;
  }
  return ids;
}

function findOwnGroupPrefixEnd(xml, start) {
  const nextChildren = xml.indexOf("<Группы", start);
  const nextClose = xml.indexOf("</Группа>", start);
  if (nextChildren === -1 && nextClose === -1) return Math.min(xml.length, start + 2000);
  if (nextChildren === -1) return nextClose;
  if (nextClose === -1) return nextChildren;
  return Math.min(nextChildren, nextClose);
}

function latestImportXml() {
  const root = "/opt/lumera/1c-exchange/uploads";
  if (!fs.existsSync(root)) return "";
  const files = [];
  walk(root, files);
  return files
    .filter((file) => /import.*\.xml$/i.test(path.basename(file)))
    .sort((left, right) => fs.statSync(right).mtimeMs - fs.statSync(left).mtimeMs)[0] || "";
}

function walk(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) walk(file, out);
    else out.push(file);
  }
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

function collectXmlBlocks(xml, tag) {
  if (!xml) return [];
  const escaped = escapeRegExp(tag);
  const result = [];
  const regexp = new RegExp(`<(?:[^:\\s>]+:)?${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/(?:[^:\\s>]+:)?${escaped}>`, "gi");
  let match;
  while ((match = regexp.exec(xml))) result.push(match[1]);
  return result;
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
  } catch {}
  return utf8;
}

function readExcludedCategoryIds() {
  try {
    if (!fs.existsSync(EXCLUDED_CATEGORY_IDS_FILE)) return new Set();
    const raw = JSON.parse(fs.readFileSync(EXCLUDED_CATEGORY_IDS_FILE, "utf8"));
    const ids = Array.isArray(raw) ? raw : raw.ids;
    return new Set((ids || []).map(stringOrNull).filter(Boolean));
  } catch {
    return new Set();
  }
}

function backupStore() {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  fs.copyFileSync(STORE_FILE, path.join(BACKUP_DIR, `lumera-store-before-category-tree-${stamp}.json`));
}

function writeStore(store) {
  const tmp = `${STORE_FILE}.${crypto.randomUUID()}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(store, null, 2), "utf8");
  fs.renameSync(tmp, STORE_FILE);
}

function uniqueId(items, prefix, base) {
  let id = `${prefix}-${base || crypto.randomBytes(4).toString("hex")}`;
  let index = 2;
  while (items.some((item) => item.id === id)) id = `${prefix}-${base}-${index++}`;
  return id;
}

function uniqueSlug(items, text) {
  const base = slugify(text) || crypto.randomBytes(4).toString("hex");
  let slug = base;
  let index = 2;
  while (items.some((item) => item.slug === slug)) slug = `${base}-${index++}`;
  return slug;
}

function slugify(value) {
  const map = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y",
    к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u",
    ф: "f", х: "h", ц: "c", ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e",
    ю: "yu", я: "ya",
  };
  return String(value || "")
    .toLowerCase()
    .replace(/[а-яё]/g, (char) => map[char] || char)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function toStringArray(value) {
  if (value == null) return [];
  if (Array.isArray(value)) return value.map(stringOrNull).filter(Boolean);
  const text = stringOrNull(value);
  return text ? [text] : [];
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

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
