const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
const removerNumeros = str => str.replace(/\d/g, '');
const removerLetrasMaiusculas = str => str.replace(/[A-Z]/g, '');
const removerCaracteresEspeciais = str => str.replace(/[^a-zA-Z0-9]/g, '');

const gerarSenha = () => {
    const tamanho = prompt("Digite a quantidade de caracteres na senha: ");

    if (isNaN(tamanho) || tamanho <= 0) {
        console.log("Por favor, digite um número válido para o tamanho da senha.");
        return;
    }

    const terNumeros = prompt("A senha deve ter números? (s/n)");
    const terMaiusculas = prompt("A senha deve ter letras maiúsculas? (s/n)");
    const terCaracteres = prompt("A senha deve ter caracteres especiais? (s/n)");
    let caracteresValidos = caracteres;

    if (terNumeros === "n") {
        caracteresValidos = removerNumeros(caracteresValidos);
    }

    if (terMaiusculas === "n") {
        caracteresValidos = removerLetrasMaiusculas(caracteresValidos);
    }

    if (terCaracteres === "n") {
        caracteresValidos = removerCaracteresEspeciais(caracteresValidos);
    }

    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteresValidos.length);
        senha += caracteresValidos[indice];
    }

    console.log(senha);
}

gerarSenha();
