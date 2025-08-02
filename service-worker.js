self.addEventListener('install', event => {
  console.log('📦 SW installing...');
  // Bisa cache asset di sini kalau mau
});

self.addEventListener('activate', event => {
  console.log('⚙️ SW activated!');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    console.log('🚀 SKIP_WAITING diterima!');
    self.skipWaiting();
  }
});