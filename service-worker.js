  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js?v=2.2')
        .then(reg => {
          console.log('✅ Service Worker terdaftar!', reg);

          reg.onupdatefound = () => {
            const newSW = reg.installing;
            newSW.onstatechange = () => {
              if (newSW.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  showUpdateToast(() => {
                    window.location.reload();
                  });
                } else {
                  console.log('✅ Service Worker siap digunakan.');
                }
              }
            };
          };
        })
        .catch(err => console.error('❌ SW gagal daftar:', err));
    });
  }

  // ⬇⬇⬇ Tambahin fungsi ini DI BAWAHNYA
  function showUpdateToast(onReload) {
    const toast = document.getElementById('update-toast');
    const btn = document.getElementById('reload-btn');

    toast.style.display = 'block';

    btn.addEventListener('click', () => {
      toast.innerText = 'Memuat ulang...';
      onReload(); // Panggil reload setelah klik
    });
  }
