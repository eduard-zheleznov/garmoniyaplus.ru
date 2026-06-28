const STATIC_CACHE_NAME = "lumera-static-v29-images-fresh-20260618";
const MEDIA_CACHE_NAME = "lumera-media-v29-images-fresh-20260618";
const PAGE_CACHE_NAME = "lumera-pages-disabled-v29-images-fresh-20260618";

const ACTIVE_CACHES = [STATIC_CACHE_NAME, MEDIA_CACHE_NAME];
const STATIC_ASSETS = [
  "/favicon.ico",
  "/manifest.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
  "/brand-logos/lirianna.svg",
  "/brand-logos/skin-synergy.png",
  "/brand-logos/bio-prospect.svg",
  "/brand-logos/levissime.png",
  "/brand-logos/pleyana.png",
  "/brand-logos/skinosophy.svg",
  "/brand-logos/yu-r-me.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.resolve()
      .then(() =>
        self.registration.navigationPreload
          ? self.registration.navigationPreload.enable()
          : null,
      )
      .then(() => caches.keys())
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !ACTIVE_CACHES.includes(key))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

function isFastPageNavigation(requestUrl) {
  return false;
}

async function fastPageResponse(event) {
  return fetch(event.request);
}

function freshRequest(request) {
  return new Request(request, { cache: "no-cache" });
}

async function networkFirstCached(request, cacheName) {
  const cache = await caches.open(cacheName);

  try {
    const response = await fetch(freshRequest(request));
    if (response.ok) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    throw error;
  }
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;

  if (!isSameOrigin) {
    return;
  }

  const isNextOptimizedImage = requestUrl.pathname === "/_next/image";

  if (event.request.mode === "navigate" && isFastPageNavigation(requestUrl)) {
    event.respondWith(fastPageResponse(event));
    return;
  }

  // Page navigation and Next.js runtime files must stay network/browser-managed.
  // Caching them can leave old Server Action ids on phones after deployment.
  // Images are network-first below so updated product photos appear immediately.
  if (
    event.request.mode === "navigate" ||
    (requestUrl.pathname.startsWith("/_next/") && !isNextOptimizedImage) ||
    requestUrl.pathname.endsWith(".js") ||
    requestUrl.pathname.endsWith(".css")
  ) {
    return;
  }

  const isStaticDataAsset =
    requestUrl.pathname === "/manifest.webmanifest" ||
    requestUrl.pathname.startsWith("/search-index") ||
    requestUrl.pathname.startsWith("/product-fallback-covers") ||
    requestUrl.pathname.startsWith("/valid-product-ids") ||
    requestUrl.pathname.startsWith("/brand-logos/");

  if (isStaticDataAsset) {
    event.respondWith(
      networkFirstCached(event.request, STATIC_CACHE_NAME),
    );
    return;
  }

  const isMediaAsset =
    ["image", "font"].includes(event.request.destination) ||
    isNextOptimizedImage ||
    requestUrl.pathname.startsWith("/editorial/") ||
    requestUrl.pathname.startsWith("/category-covers/") ||
    requestUrl.pathname.startsWith("/uploads/") ||
    requestUrl.pathname.endsWith(".png") ||
    requestUrl.pathname.endsWith(".jpg") ||
    requestUrl.pathname.endsWith(".jpeg") ||
    requestUrl.pathname.endsWith(".svg") ||
    requestUrl.pathname.endsWith(".webp") ||
    requestUrl.pathname.endsWith(".woff2");

  if (!isMediaAsset) {
    return;
  }

  event.respondWith(networkFirstCached(event.request, MEDIA_CACHE_NAME));
});
