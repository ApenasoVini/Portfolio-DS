function gerarSenha() {
    const caracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$',
        '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '<', '>', '?'];

    var tamanho = prompt("Digite a quantidade de caracteres na senha: ");
    if (isNaN(tamanho) || tamanho <= 0) {
        console.log("Por favor, digite um número válido para o tamanho da senha.");
        return;
    }
    var senha = '';
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    console.log(senha);
}

gerarSenha();