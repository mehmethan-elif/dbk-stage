// DBK Stage — practice page offline cache.
const CACHE = "dbk-stage-v1";
const CORE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "DBK_Stage/offline-manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => Promise.all(CORE.map((file) => cache.add(file).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // The page writes the offline pack into the cache itself; do not store those
  // responses a second time here.
  if (request.headers.get("x-dbk-cache") === "page") {
    event.respondWith(fetch(request));
    return;
  }

  // The pack list must always come from the network, otherwise an old copy
  // makes the page think the download is already up to date.
  if (url.pathname.endsWith("offline-manifest.json")) {
    event.respondWith(fetch(request).catch(() => caches.match(request)));
    return;
  }

  // Audio and MIDI stems are large and are streamed on demand; keeping them in
  // the service-worker cache only fills the device's storage quota.
  if (/\.(mp3|flac|mid|m4a|wav)$/i.test(url.pathname) || request.headers.get("range")) {
    event.respondWith(fetch(request));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
          return response;
        })
        .catch(() => caches.match(request).then((hit) => hit || caches.match("index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((hit) => {
      if (hit) {
        fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              caches.open(CACHE).then((cache) => cache.put(request, response)).catch(() => {});
            }
          })
          .catch(() => {});
        return hit;
      }
      return fetch(request).then((response) => {
        if (response && response.status === 200 && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
        }
        return response;
      });
    })
  );
});
