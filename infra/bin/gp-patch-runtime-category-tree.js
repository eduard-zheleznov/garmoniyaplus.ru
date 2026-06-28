"use strict";

const fs = require("node:fs");
const path = require("node:path");

const roots = process.argv.slice(2);
if (!roots.length) {
  roots.push("/app/.next/server/chunks", "/app/.next/server/app");
}

const replacements = [
  [
    'async function x(){return(function(a){let b=[...a];for(let a of[p(),q(),r()]){let c=b.findIndex(b=>b.id===a.id);if(c>=0){b[c]={...b[c],...a};continue}b.push(a)}return b})([...(await i()).categories]).sort((a,b)=>a.sortOrder-b.sortOrder)}',
    'async function x(){return(function(a){let b=[...a];for(let a of[p(),q(),r()]){let c=b.findIndex(b=>b.id===a.id);if(c>=0){b[c]={...b[c],...a};continue}b.push(a)}return b})([...(await i()).categories].filter(a=>s(a.status,!1)&&!a.parentId&&("1c"!==a.source||!a.subtreeProductCount||a.subtreeProductCount>0))).sort((a,b)=>a.sortOrder-b.sortOrder)}',
  ],
  [
    'return b||((await i()).categories.find(b=>b.slug===a)??null)',
    'return b||((await i()).categories.find(b=>b.slug===a&&s(b.status,!1))??null)',
  ],
  [
    '&&(!c||a.categoryId===c)&&(!d||!!a.isFeatured)',
    '&&(!c||a.categoryId===c||a.categoryPathIds?.includes(c))&&(!d||!!a.isFeatured)',
  ],
  [
    'f=e.filter(a=>a.categoryId===c.id)',
    'f=e.filter(a=>a.categoryId===c.id||a.categoryPathIds?.includes(c.id))',
  ],
];

const changed = [];
for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    if (!file.endsWith(".js")) continue;
    let source = fs.readFileSync(file, "utf8");
    const before = source;
    for (const [from, to] of replacements) {
      source = source.split(from).join(to);
    }
    if (source !== before) {
      fs.writeFileSync(file, source, "utf8");
      changed.push(file);
    }
  }
}

console.log(JSON.stringify({ changed }, null, 2));
if (!changed.length) {
  process.exitCode = 2;
}

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) walk(file, out);
    else out.push(file);
  }
  return out;
}
