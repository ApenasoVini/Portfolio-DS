var goleiro, zagueiro1, zagueiro3, zagueiro2, latdireito, latesquerdo, volante, alaE, alaD, meia3, meia1, meia2, pontaD, pontaE, atacante1, atacante2, centroAvante;
var selecao = [];
var timeElement = document.getElementById('time');
var taticas

// Parâmetros para aceitar apenas letras (com acentos)
function letras(input) {
    return /^\p{L}+$/u.test(input);
}

// Parâmetros para aceitar apenas letras (sem acentos)
// function letras(input) {
//     return /^[a-zA-Z]+$/.test(input);
//   }

// MESMO PARÂMETRO PARA NÚMEROS:
//   function numeros(input) {
//     return /^\d+$/.test(input);
//   }


function campo() {

    do {
    alert("Escolha a tática que deseja utilizar:")
    taticas = prompt("A -> (4-3-3)\nB -> (3-5-2)\nC -> (4-4-2)\nD- > (4-5-1)\nSair")
        }    while (taticas !== "Sair" && taticas !== "sair" && taticas !== "A" && taticas !== "a" && taticas !== "B" && taticas !== "b" && taticas !== "C" && taticas !== "c" && taticas !== "D" && taticas !== "d") 
        
    switch (taticas) {
        case "A":
        case"a":

            goleiro = prompt("Digite o nome do goleiro");
            zagueiro1 = prompt("Digite o nome do primeiro zagueiro");
            zagueiro2 = prompt("Digite o nome do segundo zagueiro");
            latdireito = prompt("Digite o nome do lateral direito");
            latesquerdo = prompt("Digite o nome do lateral esquerdo");
            volante = prompt("Digite o nome do volante");
            meia1 = prompt("Digite o nome do primeiro meia");
            meia2 = prompt("Digite o nome do segundo meia");
            pontaE = prompt("Digite o nome do ponta esquerda");
            pontaD = prompt("Digite o nome do ponta direita");
            centroAvante = prompt("Digite o nome do centroavante");
            if (!letras(goleiro) || !letras(zagueiro1) || !letras(zagueiro2) || !letras(latdireito) || !letras(latesquerdo) || !letras(volante) || !letras(meia1) || !letras(meia2) || !letras(pontaE) || !letras(pontaD) || !letras(centroAvante)) {
                alert("Escalação inválida. Por favor, digite o nome do jogador (verifique de não digitar números).");
                return;
            }
            selecao = [goleiro, '<br><br>', latdireito, zagueiro1, zagueiro2, latesquerdo, '<br><br>', volante, '<br>', meia1, meia2, '<br><br>', pontaD, centroAvante, pontaE];
            timeElement.innerHTML = selecao.join(' ');
            break;

            case "B":
            case"b":

            goleiro = prompt("Digite o nome do goleiro");
            zagueiro1 = prompt("Digite o nome do primeiro zagueiro");
            zagueiro2 = prompt("Digite o nome do segundo zagueiro");
            zagueiro3 = prompt("Digite o nome do terceiro zagueiro");
            meia1 = prompt("Digite o nome do primeiro meia");
            meia2 = prompt("Digite o nome do segundo meia");
            meia3 = prompt("Digite o nome do teceiro meia");
            alaE = prompt("Digite o nome do ala esquerda");
            alaD = prompt("Digite o nome do ala direita");
            atacante1 = prompt("Digite o nome do primeiro atacante");
            atacante2 = prompt("Digite o nome do segundo atacante");
            if (!letras(goleiro) || !letras(zagueiro1) || !letras(zagueiro2) || !letras(zagueiro3) || !letras(meia1) || !letras(meia2) || !letras(meia1) || !letras(meia2) || !letras(meia3) || !letras(atacante1) || !letras(atacante2)) {
                alert("Escalação inválida. Por favor, digite o nome do jogador (verifique de não digitar números).");
                return;
            }
            selecao = [goleiro, '<br><br>', zagueiro1, zagueiro2, zagueiro3, '<br><br>', meia1, meia2, meia3, '<br>', alaE, alaD, '<br><br>', atacante1, atacante2];
            timeElement.innerHTML = selecao.join(' ');
            break;

            case "C":
            case"c":

            goleiro = prompt("Digite o nome do goleiro");
            zagueiro1 = prompt("Digite o nome do primeiro zagueiro");
            zagueiro2 = prompt("Digite o nome do segundo zagueiro");
            latdireito = prompt("Digite o nome do lateral direito");
            latesquerdo = prompt("Digite o nome do lateral esquerdo");
            meia1 = prompt("Digite o nome do primeiro meia");
            meia2 = prompt("Digite o nome do segundo meia");
            alaE = prompt("Digite o nome do ala esquerda");
            alaD = prompt("Digite o nome do ala direita");
            atacante1 = prompt("Digite o nome do primeiro atacante");
            atacante2 = prompt("Digite o nome do segundo atacante");
            if (!letras(goleiro) || !letras(zagueiro1) || !letras(zagueiro2) || !letras(latdireito) || !letras(latesquerdo) || !letras(alaD) || !letras(meia1) || !letras(meia2) || !letras(alaE) || !letras(atacante1) || !letras(atacante2)) {
                alert("Escalação inválida. Por favor, digite o nome do jogador (verifique de não digitar números).");
                return;
            }
            selecao = [goleiro, '<br><br>', latdireito, zagueiro1, zagueiro2, latesquerdo, '<br><br>', meia1, meia2, '<br>', alaD, alaE, '<br><br>', atacante1, atacante2];
            timeElement.innerHTML = selecao.join(' ');
            break;

            case "D":
            case"d":

            goleiro = prompt("Digite o nome do goleiro");
            zagueiro1 = prompt("Digite o nome do primeiro zagueiro");
            zagueiro2 = prompt("Digite o nome do segundo zagueiro");
            latdireito = prompt("Digite o nome do lateral direito");
            latesquerdo = prompt("Digite o nome do lateral esquerdo");
            volante = prompt("Digite o nome do volante");
            meia1 = prompt("Digite o nome do primeiro meia");
            meia2 = prompt("Digite o nome do segundo meia");
            alaE = prompt("Digite o nome do ala esquerda");
            alaD = prompt("Digite o nome do ala direita");
            centroAvante = prompt("Digite o nome do centroavante");
            if (!letras(goleiro) || !letras(zagueiro1) || !letras(zagueiro2) || !letras(latdireito) || !letras(latesquerdo) || !letras(volante) || !letras(meia1) || !letras(meia2) || !letras(alaD) || !letras(alaE) || !letras(centroAvante)) {
                alert("Escalação inválida. Por favor, digite o nome do jogador (verifique de não digitar números).");
                return;
            }
            selecao = [goleiro, '<br><br>', latdireito, zagueiro1, zagueiro2, latesquerdo, '<br><br>', volante, '<br>', meia1, meia2, '<br>', alaD, alaE, '<br><br>', centroAvante];
            timeElement.innerHTML = selecao.join(' ');
            break;
    }
}

function limpar() {
    timeElement.innerHTML = '';
}

// Parâmetros sendo usados
letras(input)