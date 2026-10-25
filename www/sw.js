// Sakuga Edit – Offline-Cache. Bei jeder neuen Version VERSION hochzählen.
const VERSION = 'sakuga-v7';
const SHELL = [
  './', 'index.html', 'manifest.webmanifest',
  'icons/icon-32.png', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png',
  'fonts/dela.woff', 'fonts/cinzel.woff', 'fonts/anton.woff', 'fonts/bangers.woff', 'fonts/marker.woff', 'fonts/jbmono.woff',
  'fonts/zen-Regular.woff', 'fonts/zen-Medium.woff', 'fonts/zen-Bold.woff', 'fonts/zen-Black.woff'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // Seite: zuerst Netz (für Updates), sonst Cache. Rest: zuerst Cache.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put('index.html', c)); return r; }).catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
