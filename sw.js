// Nombre de la cache
const cacheName = 'whatsappnow-pwa';
const RUNTIME = 'runtime';

// Archivos a cachear
const filesToCache = [
  './',
  './index.html',
  './resources/icon144.svg',
  './resources/icon240.svg',
  './resources/icon192.svg',
  './resources/icon512.png',
  './resources/apple-icon180.png',
  './resources/styles.css',
];

// Instalación del Service Worker
// Core assets
let coreAssets = [];

// On install, cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
    .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  const currentCaches = [cacheName, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(
        cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Listen for request events
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(cacheName).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone())
              .then(() => {
                return response;
              });
          });
        });
      })
    );
  }
});

console.log('I am a Service Worker!');