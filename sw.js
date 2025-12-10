const CACHE_NAME = 'geometri-v2-cache';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './ruler.js', './ruler.css',
  './gonye.js', './gonye.css',
  './aciolcer.js', './aciolcer.css',
  './pergel.js', './pergel.css',
  './cokgen.js', './cokgen.css',
  './oyunlar.js',
  './pdf.min.js',
  './pdf.worker.min.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});