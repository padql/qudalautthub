const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeSidebar');

    function openSidebar() {
      sidebar.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }

    function closeSidebar() {
      sidebar.classList.add('hidden');
      overlay.classList.add('hidden');
    }

    function clearCache() {
      caches.keys().then(names => {
        return Promise.all(names.map(name => caches.delete(name)))
      }).then(() => alert('Cache dihapus'));
    }

    function admin() {
      window.location.href = '../admin/admin.html';
    }

    toggleBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);