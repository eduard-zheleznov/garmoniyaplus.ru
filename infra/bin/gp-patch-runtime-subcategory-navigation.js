#!/usr/bin/env node
const fs = require("fs");

const categoryPagePath = "/app/.next/server/chunks/ssr/[root-of-the-server]__06mz9ux._.js";

function replaceOnce(source, from, to, label) {
  const count = source.split(from).length - 1;
  if (count !== 1) {
    throw new Error(`${label}: expected 1 match, found ${count}`);
  }
  return source.replace(from, to);
}

let source = fs.readFileSync(categoryPagePath, "utf8");

source = replaceOnce(
  source,
  'let T=(S.categories??[]).filter(a=>a.parentId===m.category.id&&(l||"published"===a.status)&&("1c"!==a.source||!a.subtreeProductCount||a.subtreeProductCount>0)).sort((a,b)=>a.sortOrder-b.sortOrder);let o=',
  'let T=(S.categories??[]).filter(a=>a.parentId===m.category.id&&(l||"published"===a.status)&&("1c"!==a.source||!a.subtreeProductCount||a.subtreeProductCount>0)).sort((a,b)=>a.sortOrder-b.sortOrder),U=m.category.parentId?(S.categories??[]).find(a=>a.id===m.category.parentId&&(l||"published"===a.status))??null:null;let o=',
  "add parent category lookup",
);

source = replaceOnce(
  source,
  '(0,b.jsxs)(c.default,{href:"/catalog",className:"inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/16 bg-white px-3.5 py-2 text-[13px] font-medium text-[var(--brand-text)] shadow-[0_12px_24px_rgba(36,29,25,0.06)] transition hover:-translate-y-0.5 md:px-4 md:py-2.5 md:text-sm",children:[(0,b.jsx)(e,{className:"h-4 w-4"}),"Все категории"]})',
  '(0,b.jsxs)("div",{className:"flex flex-wrap gap-2",children:[U?(0,b.jsxs)(c.default,{href:`/catalog/${U.slug}`,className:"inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--brand-primary)]/16 bg-white px-3.5 py-2 text-[13px] font-medium text-[var(--brand-text)] shadow-[0_12px_24px_rgba(36,29,25,0.06)] transition hover:-translate-y-0.5 md:px-4 md:py-2.5 md:text-sm",children:[(0,b.jsx)(e,{className:"h-4 w-4 shrink-0"}),(0,b.jsx)("span",{className:"truncate",children:`Назад: ${U.title}`})]}):null,(0,b.jsxs)(c.default,{href:"/catalog",className:"inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/16 bg-white/88 px-3.5 py-2 text-[13px] font-medium text-[var(--brand-text)] shadow-[0_12px_24px_rgba(36,29,25,0.06)] transition hover:-translate-y-0.5 md:px-4 md:py-2.5 md:text-sm",children:[U?null:(0,b.jsx)(e,{className:"h-4 w-4"}),"Все категории"]})]})',
  "replace category header navigation",
);

source = replaceOnce(
  source,
  'children:"Выберите подкатегорию, чтобы увидеть товары внутри нее."',
  'children:"Чтобы увидеть товары, выберите подкатегорию."',
  "subcategory helper text",
);

source = replaceOnce(
  source,
  '(0,b.jsx)(f.CatalogBrowser,{preview:l,products:m.products,categories:n,initialCategory:m.category,currentCategorySlug:m.category.slug,initialValues:o,initialPage:p,initialPageSize:q,forceMinimalCards:!0,mobileCategoryPayloads:r})',
  'm.products.length||!T.length?(0,b.jsx)(f.CatalogBrowser,{preview:l,products:m.products,categories:n,initialCategory:m.category,currentCategorySlug:m.category.slug,initialValues:o,initialPage:p,initialPageSize:q,forceMinimalCards:!0,mobileCategoryPayloads:r}):null',
  "hide empty product catalog when category only has subcategories",
);

fs.writeFileSync(categoryPagePath, source);
console.log("patched category navigation and empty subcategory-only state");
