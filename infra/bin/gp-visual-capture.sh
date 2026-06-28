#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://garmoniyaplus.ru}"
OUT_DIR="${2:-/opt/garmoniyaplus/visual-runs/$(date -u +%Y%m%d-%H%M%S)}"
AUTH="${AUTH:-}"

mkdir -p "$OUT_DIR"

cat > "$OUT_DIR/README.txt" <<EOF
base_url=$BASE_URL
captured_at_utc=$(date -u +%Y-%m-%dT%H:%M:%SZ)

Compare these screenshots against /opt/garmoniyaplus/visual-baseline/current before promoting changes.
EOF

docker run --rm --network host -v "$OUT_DIR:/work" -e BASE_URL="$BASE_URL" -e AUTH="$AUTH" mcr.microsoft.com/playwright:v1.53.0-noble /bin/bash -lc 'cd /tmp && npm init -y >/dev/null 2>&1 && npm install playwright@1.53.0 --no-save >/dev/null 2>&1 && cat >/tmp/capture.js <<'"'"'NODE'"'"'
const { chromium } = require("playwright");
const fs = require("fs");

const baseUrl = process.env.BASE_URL || "https://garmoniyaplus.ru";
const auth = process.env.AUTH || "";
const pages = [
  ["home", "/"],
  ["catalog", "/catalog"],
  ["product-image", "/product/krem-protein-dlya-volos-sh-rd-protein-cream-50-ml"],
  ["product-description", "/product/antioksidantnaya-al-ginatnaya-maska-s-klyukvoy-1-kg-g-skinosophy"],
];
const viewports = [
  ["desktop", { width: 1440, height: 1000 }],
  ["mobile", { width: 390, height: 844 }],
];

function urlFor(path) {
  return new URL(path, baseUrl).toString();
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const summary = [];
  for (const [viewportName, viewport] of viewports) {
    const contextOptions = {
      viewport,
      ignoreHTTPSErrors: true,
    };
    if (auth) {
      const [username, password] = auth.split(":", 2);
      contextOptions.httpCredentials = { username, password };
    }
    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();
    for (const [pageName, path] of pages) {
      const url = urlFor(path);
      const response = await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      await page.evaluate(async () => {
        const images = Array.from(document.images).filter((image) => {
          const rect = image.getBoundingClientRect();
          const style = window.getComputedStyle(image);
          return rect.width > 0 &&
            rect.height > 0 &&
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= window.innerHeight &&
            rect.left <= window.innerWidth &&
            style.visibility !== "hidden" &&
            style.display !== "none";
        });
        const imageLoads = Promise.all(images.map((image) => {
          if (image.complete) return Promise.resolve();
          return new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          });
        }));
        const timeout = new Promise((resolve) => setTimeout(resolve, 3000));
        await Promise.race([imageLoads, timeout]);
      });
      await page.waitForTimeout(500);
      await page.screenshot({ path: `/work/${viewportName}-${pageName}.png`, fullPage: false });
      summary.push({ viewport: viewportName, page: pageName, url, status: response?.status() ?? null });
    }
    await context.close();
  }
  await browser.close();
  fs.writeFileSync("/work/summary.json", JSON.stringify(summary, null, 2));
})();
NODE
node /tmp/capture.js'

echo "visual_run=$OUT_DIR"
