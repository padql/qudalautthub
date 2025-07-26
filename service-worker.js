if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('✅ Service Worker terdaftar!', reg))
      .catch(err => console.error('❌ SW gagal daftar:', err))
  })
}
