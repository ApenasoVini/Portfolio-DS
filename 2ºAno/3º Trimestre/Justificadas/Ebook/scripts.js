document.addEventListener('DOMContentLoaded', function () {
    const menu = function () {
        sidebar.classList.toggle('sidebar-hidden');
        main.classList.toggle('main-total');
    };

    const icon = document.getElementById('menu-icon');
    const open = document.getElementById('open-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');
    open.addEventListener('click', menu);
    icon.addEventListener('click', menu);
});