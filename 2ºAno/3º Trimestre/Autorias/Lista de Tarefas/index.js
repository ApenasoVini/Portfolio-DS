function adicionar() {
    const input = document.getElementById("input");
    const conteudo = input.value.trim();

    if (conteudo !== "") {
        const lista = document.getElementById("lista");
        const li = document.createElement("li");
        li.innerHTML = `
            ${conteudo}
            <button onclick="remover(this)">Excluir</button>
        `;
        lista.appendChild(li);
        input.value = "";
    }
}

function remover(button) {
    button.parentElement.remove();
}