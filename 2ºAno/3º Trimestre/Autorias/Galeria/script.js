var listaJS = document.getElementById('lista');
var mostrarJS = document.getElementById('mostrar');
var visivel = false;

mostrarJS.addEventListener('click', function () {
    if (visivel) {
        listaJS.style.left = '-200px';
    } else {
        listaJS.style.left = '0';
    }
    visivel = !visivel;
});

function adicionar() {
    alert('Item adicionado');
}