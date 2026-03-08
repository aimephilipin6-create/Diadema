const cacheName = "diadema-cache-v1";
const assets = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./solfege.png",
  "./music-alt.png",
  "./picture.png",
  "./notes.png",
  "./info.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(cacheName).then(cache=>cache.addAll(assets))
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(response=>response || fetch(e.request))
  );
});