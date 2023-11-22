document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('menu-icon');
    const open = document.getElementById('open-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');

    open.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-hidden');
        main.classList.toggle('main-right');
    });

    icon.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-hidden');
        main.classList.toggle('main-right');
    });
});