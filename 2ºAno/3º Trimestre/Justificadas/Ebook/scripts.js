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

document.addEventListener('DOMContentLoaded', function () {
    // Função para mostrar/ocultar seções com base no botão clicado
    function showSection(sectionId) {
        // Oculta todas as seções
        const sections = document.querySelectorAll('.main-content section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Mostra a seção correspondente ao botão clicado
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Adicionar ouvintes de eventos de clique a cada botão
    for (let i = 1; i <= 4; i++) {
        const button = document.getElementById(`capitulo${i}`);
        if (button) {
            button.addEventListener('click', function () {
                showSection(`capitulo${i}`);
            });
        }
    }
});
