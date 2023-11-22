document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('menu-icon');
    const open = document.getElementById('open-sidebar');
    const sidebar = document.querySelector('.sidebar');

    open.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-hidden');
    });
    
    icon.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-hidden');
    });
});
