function det() {
    do {

        var ordem = prompt("Qual é a ordem de sua matriz?\n1x1\n2x2\n3x3");

    } while (ordem != "1x1" && ordem != "2x2" && ordem != "3x3" && ordem != "1" && ordem != "2" && ordem != "3");


    switch (ordem) {

        case "1x1":
        case "1":

            do {
                var a11 = prompt("Qual é o elemento da matriz?");
            } while (a11 == " ");
            alert(a11 + " (Lembre-se: em uma matriz de apenas 1 elemento, seu determinante será o valor do mesmo.)");
            break;

        case "2x2":
        case "2":

            do {
                var a11 = prompt("Qual é o elemento a11 da matriz?");
                var a12 = prompt("Qual é o elemento a12 da matriz?");
                var a21 = prompt("Qual é o elemento a21 da matriz?");
                var a22 = prompt("Qual é o elemento a22 da matriz?");

            } while (a11 == " " || a12 == " " || a21 == " " || a22 == " ");

            determinante = (a11 * a22) - (a12 * a21);

            alert(determinante + " (Lembre-se: em uma matriz 2x2, seu determinante será o produto da diagonal principal subtraído pela diagonal secundária");
            break;

        case "3x3":
        case "3":

            do {
                var a11 = prompt("Qual é o elemento a11 da matriz?");
                var a12 = prompt("Qual é o elemento a12 da matriz?");
                var a13 = prompt("Qual é o elemento a13 da matriz?");
                var a21 = prompt("Qual é o elemento a21 da matriz?");
                var a22 = prompt("Qual é o elemento a22 da matriz?");
                var a23 = prompt("Qual é o elemento a23 da matriz?");
                var a31 = prompt("Qual é o elemento a31 da matriz?");
                var a32 = prompt("Qual é o elemento a32 da matriz?");
                var a33 = prompt("Qual é o elemento a33 da matriz?");

            } while (a33 == " " || a32 == " " || a31 == " " || a23 == " " || a11 == " " || a12 == " " || a21 == " " || a22 == " " || a13 == " ");

            determinante = ((a11 * a22 * a33) + (a13 * a21 * a32) + (a12 * a23 * a31)) - ((a13 * a12 * a31) + (a11 * a23 * a32) + (a12 * a21 * a33));

            alert(determinante + " (Lembre-se: em uma matriz 3x3, repetimos ao lado da matriz as duas primeiras colunas, multiplicamos os elementos das diagonais principais e secundárias, juntamos todos os termos, resolvendo as adições e subtrações.)");
            break;
    }
}

det();
