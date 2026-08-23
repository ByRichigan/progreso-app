// Service worker mínimo: necesario para que iOS/Android traten esto como app instalable de verdad
const CACHE = 'progreso-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
