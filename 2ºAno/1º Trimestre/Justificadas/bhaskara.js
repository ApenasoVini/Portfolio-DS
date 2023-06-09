function bhaskara() {

    let a = prompt("Digite o valor de A:\n");
    let b = prompt("Digite o valor de B:\n");
    let c = prompt("Digite o valor de C:\n");
    let delta = b ** 2 - 4 * a * c

    if (delta < 0) {
        alert("Não existem raízes reais");
    }
    else if (delta == 0) {
        let xUnico = (-b + Math.sqrt(delta)) / (2 * a);
        alert("A única raíz é " + xUnico);
    }
    else {

        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);

        alert("Seus resultados são: " + x1 + " e " + x2);
    }
}

bhaskara();
