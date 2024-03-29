document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('menu-icon');
    const open = document.getElementById('open-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');

    open.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-hidden');
        main.classList.toggle('main-total');
        open.style.visibility  = 'hidden';
        open.style.pointerEvents = 'none';
    });

    icon.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-hidden');
        main.classList.toggle('main-total');
        open.style.visibility  = 'visible';
        open.style.pointerEvents = 'all';
    });
});