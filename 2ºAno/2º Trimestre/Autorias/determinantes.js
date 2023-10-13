function det() {
  do {
    var ordem = prompt("Qual é a ordem de sua matriz?\n1x1\n2x2\n3x3");
  } while (
    ordem !== "1x1" &&
    ordem !== "2x2" &&
    ordem !== "3x3" &&
    ordem !== "1" &&
    ordem !== "2" &&
    ordem !== "3"
  );

  var a11, a12, a13, a21, a22, a23, a31, a32, a33;
  var determinante;

  switch (ordem) {
    case "1x1":
    case "1":
      do {
        a11 = prompt("Qual é o elemento da matriz?");
      } while (a11.trim() === "");

      determinante = Number(a11);
      alert(
        determinante +
        " (Lembre-se: em uma matriz de apenas 1 elemento, seu determinante será o valor do mesmo.)"
      );
      break;

    case "2x2":
    case "2":
      do {
        a11 = prompt("Qual é o elemento a11 da matriz?");
        a12 = prompt("Qual é o elemento a12 da matriz?");
        a21 = prompt("Qual é o elemento a21 da matriz?");
        a22 = prompt("Qual é o elemento a22 da matriz?");
      } while (
        a11.trim() === "" ||
        a12.trim() === "" ||
        a21.trim() === "" ||
        a22.trim() === ""
      );

      determinante = a11 * a22 - a12 * a21;
      alert(
        determinante +
        " (Lembre-se: em uma matriz 2x2, seu determinante será o produto da diagonal principal subtraído pela diagonal secundária)"
      );
      break;

    case "3x3":
    case "3":
      do {
        a11 = prompt("Qual é o elemento a11 da matriz?");
        a12 = prompt("Qual é o elemento a12 da matriz?");
        a13 = prompt("Qual é o elemento a13 da matriz?");
        a21 = prompt("Qual é o elemento a21 da matriz?");
        a22 = prompt("Qual é o elemento a22 da matriz?");
        a23 = prompt("Qual é o elemento a23 da matriz?");
        a31 = prompt("Qual é o elemento a31 da matriz?");
        a32 = prompt("Qual é o elemento a32 da matriz?");
        a33 = prompt("Qual é o elemento a33 da matriz?");
      } while (
        a11.trim() === "" ||
        a12.trim() === "" ||
        a13.trim() === "" ||
        a21.trim() === "" ||
        a22.trim() === "" ||
        a23.trim() === "" ||
        a31.trim() === "" ||
        a32.trim() === "" ||
        a33.trim() === ""
      );

      determinante =
        a11 * a22 * a33 +
        a12 * a23 * a31 +
        a13 * a21 * a32 -
        a13 * a22 * a31 -
        a11 * a23 * a32 -
        a12 * a21 * a33;

      alert(
        determinante +
        " (Lembre-se: em uma matriz 3x3, repetimos ao lado da matriz as duas primeiras colunas, multiplicamos os elementos das diagonais principais e secundárias, juntamos todos os termos, resolvendo as adições e subtrações.)"
      );
      break;
  }
}

det();
