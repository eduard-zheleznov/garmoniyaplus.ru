#!/usr/bin/env node
const fs = require("fs");

const siteLibPath = "/app/.next/server/chunks/ssr/[root-of-the-server]__0qfs6~9._.js";
const categoryPagePath = "/app/.next/server/chunks/ssr/[root-of-the-server]__06mz9ux._.js";

function replaceOnce(source, from, to, label) {
  const count = source.split(from).length - 1;
  if (count !== 1) {
    throw new Error(`${label}: expected 1 match, found ${count}`);
  }
  return source.replace(from, to);
}

function replaceAllRequired(source, from, to, label) {
  const count = source.split(from).length - 1;
  if (count < 1) {
    throw new Error(`${label}: expected at least 1 match, found 0`);
  }
  return source.split(from).join(to);
}

let siteLib = fs.readFileSync(siteLibPath, "utf8");
siteLib = replaceOnce(
  siteLib,
  "(!c||a.categoryId===c||a.categoryPathIds?.includes(c))",
  "(!c||a.categoryId===c)",
  "getProducts direct category filter",
);
siteLib = replaceOnce(
  siteLib,
  "f=e.filter(a=>a.categoryId===c.id||a.categoryPathIds?.includes(c.id))",
  "f=e.filter(a=>a.categoryId===c.id)",
  "getCategoryProductsBySlug direct category filter",
);
fs.writeFileSync(siteLibPath, siteLib);

let categoryPage = fs.readFileSync(categoryPagePath, "utf8");
categoryPage = replaceOnce(
  categoryPage,
  "[m,n]=await Promise.all([(0,g.getCategoryProductsBySlug)(j,l),(0,g.getCategories)()]);m||(0,d.notFound)();let o=",
  "[m,n,S]=await Promise.all([(0,g.getCategoryProductsBySlug)(j,l),(0,g.getCategories)(),(0,g.getSiteStore)()]);m||(0,d.notFound)();let T=(S.categories??[]).filter(a=>a.parentId===m.category.id&&(l||\"published\"===a.status)&&(\"1c\"!==a.source||!a.subtreeProductCount||a.subtreeProductCount>0)).sort((a,b)=>a.sortOrder-b.sortOrder);let o=",
  "category page store/subcategory injection",
);

const catalogBrowserCall = '(0,b.jsx)(f.CatalogBrowser,{preview:l,products:m.products,categories:n,initialCategory:m.category,currentCategorySlug:m.category.slug,initialValues:o,initialPage:p,initialPageSize:q,forceMinimalCards:!0,mobileCategoryPayloads:r})';
const subcategorySection =
  'T.length?(0,b.jsxs)("section",{className:"rounded-[1.9rem] border border-white/65 bg-white/86 p-4 shadow-[0_18px_55px_rgba(38,29,22,0.08)] md:rounded-[2.2rem] md:p-6",children:[(0,b.jsxs)("div",{className:"flex flex-col gap-1 md:flex-row md:items-end md:justify-between",children:[(0,b.jsx)("h2",{className:"font-[family:var(--font-heading)] text-[1.8rem] leading-none text-[var(--brand-text)] md:text-[2.2rem]",children:"Подкатегории"}),(0,b.jsx)("p",{className:"text-sm text-[var(--brand-muted)]",children:"Выберите подкатегорию, чтобы увидеть товары внутри нее."})]}),(0,b.jsx)("div",{className:"mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:T.map(a=>(0,b.jsxs)(c.default,{href:`/catalog/${a.slug}`,className:"group flex min-h-[7.5rem] flex-col justify-between rounded-[1.4rem] border border-[var(--brand-primary)]/12 bg-white/90 p-4 text-[var(--brand-text)] shadow-[0_12px_28px_rgba(36,29,25,0.06)] transition hover:-translate-y-0.5 hover:border-[var(--brand-primary)]/28",children:[(0,b.jsx)("span",{className:"text-lg font-semibold leading-tight",children:a.title}),(0,b.jsx)("span",{className:"mt-4 text-xs uppercase tracking-[0.16em] text-[var(--brand-muted)]",children:`${a.subtreeProductCount??a.productCount??0} товаров`})]},a.id))})]}):null,';

categoryPage = replaceOnce(
  categoryPage,
  catalogBrowserCall,
  subcategorySection + catalogBrowserCall,
  "category page subcategory section",
);

categoryPage = replaceAllRequired(
  categoryPage,
  "var f=a.i(11041),g=a.i(96835);async function h",
  "var f=a.i(11041),g=a.i(96835);async function h",
  "category page module marker",
);
fs.writeFileSync(categoryPagePath, categoryPage);

console.log("patched runtime catalog behavior: direct products + direct subcategory cards");
