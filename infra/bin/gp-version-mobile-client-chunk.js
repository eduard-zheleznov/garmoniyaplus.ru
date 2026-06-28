#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const root = process.argv[2] || "/app";
const oldName = process.argv[3] || "0j2-0mh2v0hxt.js";
const suffix = process.argv[4] || "v20260601-mobile-cachefix";
const newName = oldName.replace(/\.js$/, `.${suffix}.js`);
const oldPath = path.join(root, ".next/static/chunks", oldName);
const newPath = path.join(root, ".next/static/chunks", newName);

if (!fs.existsSync(oldPath)) {
  throw new Error(`Chunk not found: ${oldPath}`);
}

fs.copyFileSync(oldPath, newPath);

const targets = [
  path.join(root, ".next"),
  path.join(root, "server.js"),
];

let replacedFiles = 0;
let replacements = 0;

for (const target of targets) {
  if (!fs.existsSync(target)) continue;
  for (const file of walkFiles(target)) {
    if (!isTextCandidate(file)) continue;
    let source;
    try {
      source = fs.readFileSync(file, "utf8");
    } catch {
      continue;
    }
    if (!source.includes(oldName)) continue;
    const count = source.split(oldName).length - 1;
    const next = source.replaceAll(oldName, newName);
    fs.copyFileSync(file, `${file}.before-mobile-cachefix-${Date.now()}`);
    fs.writeFileSync(file, next, "utf8");
    replacedFiles += 1;
    replacements += count;
  }
}

console.log(JSON.stringify({
  oldName,
  newName,
  newPath,
  replacedFiles,
  replacements,
}, null, 2));

function* walkFiles(target) {
  const stat = fs.statSync(target);
  if (stat.isFile()) {
    yield target;
    return;
  }
  for (const entry of fs.readdirSync(target, { withFileTypes: true })) {
    const fullPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      yield* walkFiles(fullPath);
    } else if (entry.isFile()) {
      yield fullPath;
    }
  }
}

function isTextCandidate(file) {
  return /\.(js|json|html|txt|rsc|map)$/i.test(file) || !path.extname(file);
}
