#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const STORE_FILE = process.env.STORE_FILE || process.argv[2] || "/opt/lumera/storage/lumera-store.json";
const XML_ROOT = process.env.XML_ROOT || process.argv[3] || "/opt/lumera/1c-exchange/uploads";
const DRY_RUN = process.env.DRY_RUN === "1" || process.argv.includes("--dry-run");
const GUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const store = JSON.parse(fs.readFileSync(STORE_FILE, "utf8"));
const products = Array.isArray(store.products) ? store.products : [];
const targetProducts = products.filter((product) => GUID_RE.test(String(product.title || "")));
const targetIds = new Set(targetProducts.map((product) => product.externalId || product.title).filter(Boolean));

const titleById = new Map();
for (const file of listXmlFiles(XML_ROOT)) {
  if (titleById.size >= targetIds.size) break;
  const xml = fs.readFileSync(file.path, "utf8");
  collectTitles(xml, "Товар", targetIds, titleById);
  collectTitles(xml, "Предложение", targetIds, titleById);
}

const existingSlugs = new Map();
for (const product of products) {
  if (!product.slug) continue;
  existingSlugs.set(product.slug, product.id);
}

const changed = [];
const hidden = [];
for (const product of targetProducts) {
  const externalId = product.externalId || product.title;
  const recoveredTitle = titleById.get(externalId);
  if (recoveredTitle) {
    const oldTitle = product.title;
    const oldSlug = product.slug;
    product.title = recoveredTitle;
    if (!product.seoTitle || GUID_RE.test(String(product.seoTitle))) product.seoTitle = recoveredTitle;
    if (!product.slug || GUID_RE.test(String(product.slug))) {
      product.slug = uniqueSlug(products, slugify(recoveredTitle), product.id, existingSlugs);
    }
    product.recoveredTitleFrom1CAt = new Date().toISOString();
    product.updatedFrom1CAt = new Date().toISOString();
    changed.push({ id: product.id, externalId, oldTitle, newTitle: product.title, oldSlug, newSlug: product.slug });
    continue;
  }

  if (product.status !== "draft") {
    product.status = "draft";
    product.hiddenBadImportTitle = true;
    product.updatedFrom1CAt = new Date().toISOString();
  }
  hidden.push({ id: product.id, externalId, title: product.title, slug: product.slug });
}

if (!DRY_RUN && (changed.length || hidden.length)) {
  const backup = `${STORE_FILE}.before-guid-title-repair-${new Date().toISOString().replace(/[:.]/g, "-")}.bak`;
  fs.copyFileSync(STORE_FILE, backup);
  store.updatedAt = new Date().toISOString();
  fs.writeFileSync(STORE_FILE, JSON.stringify(store, null, 2), "utf8");
}

console.log(JSON.stringify({
  storeFile: STORE_FILE,
  xmlRoot: XML_ROOT,
  dryRun: DRY_RUN,
  guidTitleProducts: targetProducts.length,
  recovered: changed.length,
  hiddenWithoutRecoveredTitle: hidden.length,
  examples: changed.slice(0, 10),
  hiddenExamples: hidden.slice(0, 10),
}, null, 2));

function listXmlFiles(root) {
  const files = [];
  walk(root, files);
  return files
    .filter((file) => /\.(xml|txt)$/i.test(file.path))
    .sort((left, right) => right.mtimeMs - left.mtimeMs);
}

function walk(dir, files) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }
    if (entry.isFile()) {
      const stat = fs.statSync(fullPath);
      files.push({ path: fullPath, mtimeMs: stat.mtimeMs });
    }
  }
}

function collectTitles(xml, tag, targetIds, out) {
  const escaped = escapeRegExp(tag);
  const regexp = new RegExp(`<(?:[^:\\s>]+:)?${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/(?:[^:\\s>]+:)?${escaped}>`, "gi");
  let match;
  while ((match = regexp.exec(xml))) {
    const block = match[1];
    const externalId = normalize1cId(extractXmlValue(block, "Ид"));
    if (!externalId || !targetIds.has(externalId) || out.has(externalId)) continue;
    const title = cleanXmlText(extractXmlValue(block, "Наименование"));
    if (title && !GUID_RE.test(title)) out.set(externalId, title);
  }
}

function extractXmlValue(xml, tag) {
  const escaped = escapeRegExp(tag);
  const regexp = new RegExp(`<(?:[^:\\s>]+:)?${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/(?:[^:\\s>]+:)?${escaped}>`, "i");
  return xml.match(regexp)?.[1] || "";
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

function normalize1cId(value) {
  return cleanXmlText(value);
}

function uniqueSlug(products, baseSlug, productId, existingSlugs) {
  const base = baseSlug || `product-${productId}`;
  let slug = base;
  let index = 2;
  while (existingSlugs.has(slug) && existingSlugs.get(slug) !== productId) {
    slug = `${base}-${index++}`;
  }
  existingSlugs.set(slug, productId);
  return slug;
}

function slugify(value) {
  const map = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y",
    к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f",
    х: "h", ц: "c", ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
  };
  return String(value || "")
    .trim()
    .toLowerCase()
    .split("")
    .map((char) => map[char] ?? char)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
