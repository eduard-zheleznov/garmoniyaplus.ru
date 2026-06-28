#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const root = process.argv[2] || "/app";
const chunkFile = path.join(root, ".next/static/chunks/0j2-0mh2v0hxt.js");
const serviceWorkerFile = path.join(root, "public/service-worker.js");
const serverDir = path.join(root, ".next/server/chunks/ssr");
const serverFiles = fs.existsSync(serverDir)
  ? fs.readdirSync(serverDir).filter((file) => file.endsWith(".js")).map((file) => path.join(serverDir, file))
  : [];

patchClientChunk(chunkFile);
patchServerChunks(serverFiles);
patchServiceWorker(serviceWorkerFile);

function patchClientChunk(file) {
  let source = fs.readFileSync(file, "utf8");
  const original = source;

  source = replaceOnce(
    source,
    "(0,a.useEffect)(()=>{$(m)},[m]),(0,a.useEffect)(()=>{let e=!1,",
    "(0,a.useEffect)(()=>{$(m)},[m]),(0,a.useEffect)(()=>{try{\"scrollRestoration\"in window.history&&(window.history.scrollRestoration=\"manual\"),window.scrollTo({top:0,left:0,behavior:\"auto\"})}catch{}},[S,m,L]),(0,a.useEffect)(()=>{let e=!1,",
    "client scroll reset effect",
  );

  source = replaceOnce(
    source,
    "Y=J&&N?.[L]?N[L]:{category:p,products:o},G=Y.category,Q=Y.products,V=(0,a.useMemo)",
    "Y=J&&N?.[L]?N[L]:{category:p,products:o},G=Y.category,Q=Y.products,eP=c.find(e=>e.id===G.parentId)||null,V=(0,a.useMemo)",
    "client parent category variable",
  );

  source = replaceOnce(
    source,
    '(0,t.jsxs)(r.default,{href:"/catalog",className:"inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/16 bg-white px-3.5 py-2 text-[12px] font-medium text-[var(--brand-text)] shadow-[0_12px_24px_rgba(36,29,25,0.06)]",children:[(0,t.jsx)(n.ArrowLeft,{className:"h-4 w-4"}),"Все категории"]})',
    '(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[eP?(0,t.jsxs)(r.default,{href:`/catalog/${eP.slug}`,onClick:e=>{if(J&&N?.[eP.slug]){e.preventDefault(),D(1),$(eP.slug)}},className:"inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--brand-primary)]/16 bg-white px-3.5 py-2 text-[12px] font-medium text-[var(--brand-text)] shadow-[0_12px_24px_rgba(36,29,25,0.06)]",children:[(0,t.jsx)(n.ArrowLeft,{className:"h-4 w-4 shrink-0"}),(0,t.jsx)("span",{className:"truncate",children:`Назад в: ${eP.title}`})]}):null,(0,t.jsxs)(r.default,{href:"/catalog",className:"inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/16 bg-white px-3.5 py-2 text-[12px] font-medium text-[var(--brand-text)] shadow-[0_12px_24px_rgba(36,29,25,0.06)]",children:[eP?null:(0,t.jsx)(n.ArrowLeft,{className:"h-4 w-4"}),"Все категории"]})]})',
    "client mobile back links",
  );

  source = source.replaceAll("{scroll:!1}", "{scroll:!0}");

  writeIfChanged(file, original, source);
}

function patchServerChunks(files) {
  let patched = 0;
  for (const file of files) {
    let source = fs.readFileSync(file, "utf8");
    const original = source;

    source = source.replaceAll("{scroll:!1}", "{scroll:!0}");

    if (source.includes("(0,d.useEffect)(()=>{M(m)},[m]),(0,d.useEffect)(()=>{let a=!1,")) {
      source = source.replace(
        "(0,d.useEffect)(()=>{M(m)},[m]),(0,d.useEffect)(()=>{let a=!1,",
        "(0,d.useEffect)(()=>{M(m)},[m]),(0,d.useEffect)(()=>{try{\"scrollRestoration\"in window.history&&(window.history.scrollRestoration=\"manual\"),window.scrollTo({top:0,left:0,behavior:\"auto\"})}catch{}},[z,m,L]),(0,d.useEffect)(()=>{let a=!1,",
      );
    }

    if (source.includes("X=W&&y?.[L]?y[L]:{category:l,products:i},Y=X.category,Z=X.products,$=(0,d.useMemo)")) {
      source = source.replace(
        "X=W&&y?.[L]?y[L]:{category:l,products:i},Y=X.category,Z=X.products,$=(0,d.useMemo)",
        "X=W&&y?.[L]?y[L]:{category:l,products:i},Y=X.category,Z=X.products,ar=j.find(a=>a.id===Y.parentId)||null,$=(0,d.useMemo)",
      );
    }

    const catalogFilterChunkFrom = '(0,b.jsxs)(c.default,{href:"/catalog",className:"inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/16 bg-white px-3.5 py-2 text-[12px] font-medium text-[var(--brand-text)] shadow-[0_12px_24px_rgba(36,29,25,0.06)]",children:[(0,b.jsx)(f.ArrowLeft,{className:"h-4 w-4"}),"Все категории"]})';
    const catalogFilterChunkTo = '(0,b.jsxs)("div",{className:"flex flex-wrap gap-2",children:[ar?(0,b.jsxs)(c.default,{href:`/catalog/${ar.slug}`,onClick:a=>{if(W&&y?.[ar.slug]){a.preventDefault(),O(1),M(ar.slug)}},className:"inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--brand-primary)]/16 bg-white px-3.5 py-2 text-[12px] font-medium text-[var(--brand-text)] shadow-[0_12px_24px_rgba(36,29,25,0.06)]",children:[(0,b.jsx)(f.ArrowLeft,{className:"h-4 w-4 shrink-0"}),(0,b.jsx)("span",{className:"truncate",children:`Назад в: ${ar.title}`})]}):null,(0,b.jsxs)(c.default,{href:"/catalog",className:"inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/16 bg-white px-3.5 py-2 text-[12px] font-medium text-[var(--brand-text)] shadow-[0_12px_24px_rgba(36,29,25,0.06)]",children:[ar?null:(0,b.jsx)(f.ArrowLeft,{className:"h-4 w-4"}),"Все категории"]})]})';
    source = source.replace(catalogFilterChunkFrom, catalogFilterChunkTo);

    writeIfChanged(file, original, source);
    if (source !== original) patched += 1;
  }
  if (!patched) throw new Error("server mobile back link pattern not found");
}

function patchServiceWorker(file) {
  let source = fs.readFileSync(file, "utf8");
  const original = source;
  source = source
    .replace(/lumera-static-v\d+(?:-[^"]*)?/g, "lumera-static-v14-mobile-nav-20260601")
    .replace(/lumera-media-v\d+(?:-[^"]*)?/g, "lumera-media-v14-mobile-nav-20260601");
  writeIfChanged(file, original, source);
}

function replaceOnce(source, from, to, label) {
  if (!source.includes(from)) {
    if (source.includes(to)) return source;
    throw new Error(`${label}: pattern not found`);
  }
  return source.replace(from, to);
}

function writeIfChanged(file, original, source) {
  if (source === original) {
    console.log(`${file}: unchanged`);
    return;
  }
  fs.copyFileSync(file, `${file}.before-mobile-nav-pwa-${Date.now()}`);
  fs.writeFileSync(file, source, "utf8");
  console.log(`${file}: patched`);
}
