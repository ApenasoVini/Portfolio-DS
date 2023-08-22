//Par ou Ímpar
function par() {
  var num = prompt("Escolha um número: ");
  if (num % 2 === 0) {
    alert("par");
  } else {
    alert("ímpar");
  }
}
par();

//Fatorial
function fatorial() {
  var num2 = prompt("Escolha um número: ");
  if (num2 == 0) {
    alert(1)
  }
  else {
    for (var i = num2 - 1; i >= 1; i--) {
      num2 *= i;
    }
    alert(num2);
  }
}
fatorial();

//Primos
function primos() {
  var num3 = prompt("Digite um número: ");
  var div = 0

  for (var i = 0; i <= num3; i++) {
    if (num3 % i == 0) {
      div++;
    }
  }
  return div == 2 ? alert(num3 + " é primo") : alert(num3 + " não é primo");
}
primos()

//Fibonacci
function fibonacci() {
  const seq = [1, 1];
  var num4 = prompt("Digite a quantidade de números na sequência: ");

  if (num4 == 1) {
    alert("Sequência: " + seq.splice(1));
  } else if (num4 == 2) {
    alert("Sequência: " + seq);
  } else {

    for (var i = 2; i < num4; i++) {
      seq.push(seq[i - 1] + seq[i - 2]);
    }
    alert("Sequência: " + seq);
  }
}
fibonacci();

//String invertida
function invertString() {
  var str = prompt("Esreva algo: ")
  alert(str.split("").reverse().join(""));
}
invertString()

//Números pares em array.
function arrayPar() {
  var nums = prompt("Digite os números: ");
  var numArray = nums.split("");
  let numspares = [];

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
      numspares.push(numArray[i]);
    }
  }
  alert(numspares);
}
arrayPar();

//Palíndromo.
function palindromo() {
  var palavraInicial = prompt("Esreva algo: ")
  var palavra = palavraInicial.toLowerCase()
  var palavraInv = palavra.split("").reverse().join("");

  if (palavra === palavraInv) {
    alert(palavraInicial + " é um palíndromo")
  }
  else {
    alert(palavraInicial + " não é um palíndromo")
  }
}
palindromo()

//Vogais
function vogais() {
  var palavra = prompt("Digite uma palavra: ");
  var letras = palavra.split("");
  let vogal = [];

  for (var i = 0; i < letras.length; i++) {
    if (letras[i] === "a" || letras[i] === "e" || letras[i] === "i" || letras[i] === "o" || letras[i] === "u") {
      vogal.push(letras[i]);
    }
  }
  alert(vogal);
}
vogais();

//Soma dos pares.
function SomaPares() {
  var inicio = parseInt(prompt("Digite o primeiro número: "));
  var fim = parseInt(prompt("Digite o último número: "));
  var soma = 0;

  for (var i = inicio; i <= fim; i++) {
    if (i % 2 == 0) {
      soma += i;
    }
  }
  alert(soma);
}
SomaPares();

//Multiplicação
function multiplicacao() {
  var numero = parseInt(prompt("Digite o número: "));
  var vezes = parseInt(prompt("Digite a quantidade de vezes: "));
  var resultado = 0;

  for (var i = 0; i < vezes; i++) {
    resultado += numero;
  }
  alert(resultado);
}
multiplicacao();