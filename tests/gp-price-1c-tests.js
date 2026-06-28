#!/usr/bin/env node
"use strict";

const childProcess = require("node:child_process");
const fs = require("node:fs");
const vm = require("node:vm");

const container = process.env.GP_CONTAINER || "garmoniyaplus-staging";
const oldClientChunk = "/app/.next/static/chunks/0j2-0mh2v0hxt.v20260615-filters-favorites.js";
const newClientChunk = "/app/.next/static/chunks/0j2-0mh2v0hxt.v20260625-1c-prices.js";
const serverResolverChunk = "/app/.next/server/chunks/ssr/_0xo68dw._.js";
const oneCServer = "/opt/lumera-1c/server.js";

function exec(args, options = {}) {
  return childProcess.execFileSync(args[0], args.slice(1), {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    ...options,
  });
}

function dockerCat(path) {
  return exec(["docker", "exec", container, "cat", path]);
}

function dockerTest(path) {
  try {
    exec(["docker", "exec", container, "test", "-f", path]);
    return true;
  } catch {
    return false;
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function getClientResolver() {
  const source = dockerCat(newClientChunk);
  const sandbox = {
    document: { currentScript: null },
    globalThis: {
      TURBOPACK: {
        push(payload) {
          sandbox.payload = payload;
        },
      },
    },
  };
  sandbox.globalThis.globalThis = sandbox.globalThis;
  vm.runInNewContext(source, sandbox, { filename: newClientChunk });
  const payload = sandbox.payload;
  assert(Array.isArray(payload), "client chunk did not register TURBOPACK payload");
  const moduleIndex = payload.findIndex((item) => item === 25599);
  assert(moduleIndex !== -1, "client resolver module 25599 not found");
  const moduleFactory = payload[moduleIndex + 1];
  const exports = {};
  moduleFactory({
    s(definition) {
      for (let index = 0; index < definition.length; index += 3) {
        exports[definition[index]] = definition[index + 2];
      }
    },
  });
  assert(typeof exports.resolveProductPricing === "function", "client resolver export missing");
  return exports.resolveProductPricing;
}

function getServerResolver() {
  const source = dockerCat(serverResolverChunk);
  const sandbox = { module: { exports: null }, exports: null };
  sandbox.exports = sandbox.module.exports;
  vm.runInNewContext(source, sandbox, { filename: serverResolverChunk });
  const modules = sandbox.module.exports;
  assert(Array.isArray(modules), "server chunk did not export module array");
  const moduleIndex = modules.findIndex((item) => item === 66916);
  assert(moduleIndex !== -1, "server resolver module 66916 not found");
  const moduleFactory = modules[moduleIndex + 1];
  const exports = {};
  moduleFactory({
    s(definition) {
      for (let index = 0; index < definition.length; index += 3) {
        exports[definition[index]] = definition[index + 2];
      }
    },
  });
  assert(typeof exports.resolveProductPricing === "function", "server resolver export missing");
  return exports.resolveProductPricing;
}

function checkResolver(resolveProductPricing, label) {
  const guest = { role: "guest", isAuthenticated: false, publicMarkupPercent: 8, personalDiscountPercent: 0 };
  const customer = { role: "customer", isAuthenticated: true, publicMarkupPercent: 8, personalDiscountPercent: 7 };

  const legacyGuest = resolveProductPricing({ price: 1000, compareAtPrice: null }, guest);
  assert(legacyGuest.finalPrice === 1000, `${label}: legacy guest price must not add 8%`);
  assert(legacyGuest.priceAvailable === true, `${label}: legacy guest price should be available`);

  const twoPricesGuest = resolveProductPricing({ price: 900, retailPrice: 1200, wholesalePrice: 900 }, guest);
  assert(twoPricesGuest.finalPrice === 1200, `${label}: guest must see retailPrice`);
  assert(twoPricesGuest.priceAvailable === true, `${label}: guest retail price should be available`);

  const twoPricesCustomer = resolveProductPricing({ price: 1200, retailPrice: 1200, wholesalePrice: 900 }, customer);
  assert(twoPricesCustomer.finalPrice === 900, `${label}: authenticated customer must see wholesalePrice`);
  assert(twoPricesCustomer.priceAvailable === true, `${label}: authenticated wholesale price should be available`);

  const wholesaleOnlyGuest = resolveProductPricing({ price: 900, wholesalePrice: 900 }, guest);
  assert(wholesaleOnlyGuest.finalPrice === 0, `${label}: guest without retail price should not receive numeric wholesale price`);
  assert(wholesaleOnlyGuest.priceAvailable === false, `${label}: guest without retail price should be marked unavailable`);
  assert(
    wholesaleOnlyGuest.priceLabel === "Цена доступна профессиональным покупателям",
    `${label}: missing professional buyer price label`
  );
}

function main() {
  assert(dockerTest(newClientChunk), `new client chunk is missing: ${newClientChunk}`);
  assert(dockerTest(oldClientChunk), `old client chunk unexpectedly missing: ${oldClientChunk}`);

  const clientSource = dockerCat(newClientChunk);
  assert(!clientSource.includes("publicMarkupPercent/100"), "client chunk still contains +8% markup formula");
  assert(clientSource.includes("Цена доступна профессиональным покупателям"), "client chunk lacks professional buyer label");
  assert(clientSource.includes("priceLabel||"), "client product card does not use priceLabel");

  const serverSource = dockerCat(serverResolverChunk);
  assert(!serverSource.includes("publicMarkupPercent/100"), "server resolver chunk still contains +8% markup formula");

  checkResolver(getClientResolver(), "client");
  checkResolver(getServerResolver(), "server");

  const oneCSource = fs.readFileSync(oneCServer, "utf8");
  assert(oneCSource.includes("retailPrice"), "1C importer does not persist retailPrice");
  assert(oneCSource.includes("wholesalePrice"), "1C importer does not persist wholesalePrice");
  assert(oneCSource.includes("findOfferPrices"), "1C importer still lacks multi-price parser");
  assert(oneCSource.includes("productsWithRetailPriceInPayload"), "1C importer diagnostics lack retail price count");
  assert(oneCSource.includes("productsWithWholesalePriceInPayload"), "1C importer diagnostics lack wholesale price count");
}

try {
  main();
  console.log("gp-price-1c-tests: OK");
} catch (error) {
  console.error(`gp-price-1c-tests: FAIL: ${error.message}`);
  process.exit(1);
}
