#!/usr/bin/env node
"use strict";

const fs = require("node:fs");

const files = process.argv.slice(2);
if (!files.length) {
  console.error("Usage: gp-patch-guid-import-guard.js /path/to/server.js [...]");
  process.exit(1);
}

for (const file of files) {
  let source = fs.readFileSync(file, "utf8");
  const original = source;

  if (!source.includes("function isGuidLike(")) {
    source = source.replace(
      "function upsertProduct(store, incoming, stats) {",
      "function isGuidLike(value) {\n  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(value || \"\").trim());\n}\n\nfunction upsertProduct(store, incoming, stats) {",
    );
  }

  source = source.replace(
    "  const textWasManual = existing.source !== \"1c\" || existing.syncPolicy?.preserveManualText !== false;",
    "  const textWasManual = existing.source !== \"1c\" || existing.syncPolicy?.preserveManualText !== false;\n  const existingTitleLooksTechnical = isGuidLike(existing.title);",
  );

  source = source.replace(
    "  if (!PRESERVE_MANUAL_FIELDS || !textWasManual || !existing.title) existing.title = incoming.title || existing.title;",
    "  if (!PRESERVE_MANUAL_FIELDS || !textWasManual || !existing.title || existingTitleLooksTechnical) existing.title = incoming.title || existing.title;",
  );

  source = source.replace(
    "  if (!existing.seoTitle) existing.seoTitle = existing.title;",
    "  if (!existing.seoTitle || isGuidLike(existing.seoTitle)) existing.seoTitle = existing.title;",
  );

  if (source === original) {
    console.log(`${file}: already patched or pattern not found`);
    continue;
  }

  fs.copyFileSync(file, `${file}.before-guid-import-guard-${Date.now()}`);
  fs.writeFileSync(file, source, "utf8");
  console.log(`${file}: patched`);
}
