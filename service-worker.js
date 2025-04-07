const CACHE_NAME = 'gps-coordinate-cache-v1';
const urlsToCache = [
    '/gps_transformation_web.html',
    'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js',
    'https://unpkg.com/@tailwindcss/browser@4'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
          .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});    