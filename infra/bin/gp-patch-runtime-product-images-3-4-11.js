#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const roots = [
  "/app/.next/static/chunks",
  "/app/.next/server/chunks/ssr",
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && full.endsWith(".js")) out.push(full);
  }
  return out;
}

function replaceAll(source, from, to) {
  return source.split(from).join(to);
}

let changed = [];

for (const file of roots.flatMap((root) => fs.existsSync(root) ? walk(root) : [])) {
  let source = fs.readFileSync(file, "utf8");
  const before = source;

  source = replaceAll(source, "Назад: ${U.title}", "Назад в: ${U.title}");
  source = replaceAll(source, "Назад: ${a.title}", "Назад в: ${a.title}");

  // Client chunks from the current build ignored 1C gallery images and always used old editorial assets.
  source = replaceAll(
    source,
    "let u=p[e.categoryId]??d.Sparkles,h=o[(m=e).id]??c[m.categoryId]??n;return",
    "let u=p[e.categoryId]??d.Sparkles,h=o[(m=e).id]??c[m.categoryId]??n,q=e.image||e.gallery?.[0]||null;return",
  );
  source = replaceAll(
    source,
    "let u=m[e.categoryId]??s.Sparkles,b=d[(x=e).id]??c[x.categoryId]??o;return",
    "let u=m[e.categoryId]??s.Sparkles,b=d[(x=e).id]??c[x.categoryId]??o,q=e.image||e.gallery?.[0]||null;return",
  );
  source = replaceAll(
    source,
    "src:h.src,alt:e.title,fill:!0,priority:i,quality:82",
    "src:q||h.src,alt:e.title,fill:!0,priority:i,quality:82",
  );
  source = replaceAll(
    source,
    "src:b.src,alt:e.title,fill:!0,priority:n,quality:82",
    "src:q||b.src,alt:e.title,fill:!0,priority:n,quality:82",
  );
  source = replaceAll(
    source,
    'className:"object-cover",style:{objectPosition:h.position??"center"}',
    'className:q?"object-contain p-3 md:p-5":"object-cover",style:{objectPosition:q?"center":h.position??"center"}',
  );
  source = replaceAll(
    source,
    'className:"object-cover",style:{objectPosition:b.position??"center"}',
    'className:q?"object-contain p-3 md:p-5":"object-cover",style:{objectPosition:q?"center":b.position??"center"}',
  );

  // Server chunks already knew about gallery images in some routes; make their sizing universal too.
  source = replaceAll(
    source,
    'className:"object-cover",style:{objectPosition:q?"center":p.position??"center"}',
    'className:q?"object-contain p-3 md:p-5":"object-cover",style:{objectPosition:q?"center":p.position??"center"}',
  );
  source = replaceAll(
    source,
    'className:"object-cover",style:{objectPosition:q?"center":n.position??"center"}',
    'className:q?"object-contain p-3 md:p-5":"object-cover",style:{objectPosition:q?"center":n.position??"center"}',
  );

  // Remove the beige overlay/blur and the decorative bottom text + icon from product artwork.
  source = replaceAll(source, "absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/45 blur-2xl", "hidden");
  source = replaceAll(source, "absolute bottom-3 left-4 h-16 w-16 rounded-full bg-[var(--brand-primary)]/14 blur-xl", "hidden");
  source = replaceAll(source, "relative flex h-full min-h-[12rem] flex-col justify-between", "hidden");
  source = replaceAll(
    source,
    'className:t?"absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,249,244,0.04)_72%,rgba(255,249,244,0.08))]":"absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,249,244,0.72)_55%,rgba(255,249,244,0.95))]"',
    'className:"hidden"',
  );
  source = replaceAll(
    source,
    'className:c?"absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,249,244,0.04)_72%,rgba(255,249,244,0.08))]":"absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,249,244,0.72)_55%,rgba(255,249,244,0.95))]"',
    'className:"hidden"',
  );
  source = replaceAll(
    source,
    'className:d?"absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,249,244,0.04)_72%,rgba(255,249,244,0.08))]":"absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,249,244,0.72)_55%,rgba(255,249,244,0.95))]"',
    'className:"hidden"',
  );

  if (source !== before) {
    fs.writeFileSync(file, source);
    changed.push(file);
  }
}

if (!changed.length) {
  throw new Error("No runtime files were patched");
}

console.log("patched files:");
for (const file of changed) console.log(file);
