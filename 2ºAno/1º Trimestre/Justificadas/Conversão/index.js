//início da função 
function converte() {

    //A variável temperatura é definida pelo valor digitado pelo usuário
    var temperatura = Number(document.getElementById("temperatura").value)

    //A variável resultadoFinal é definida inicialmente como 0, para ter seu valor atribuído pelo cálculo escolhido
    var resultadoFinal = 0

    //Escolha de cálculo e sua seguinte equação (checked é usado para verificar se o cálculo foi escolhido) 
    if (document.getElementById("cf").checked) {
        resultadoFinal = temperatura * (9 / 5) + 32
    }
    else if (document.getElementById("ck").checked) {
        resultadoFinal = temperatura + 273.15
    }
    else if (document.getElementById("fc").checked) {
        resultadoFinal = (temperatura - 32) * (5 / 9)
    }
    else if (document.getElementById("fk").checked) {
        resultadoFinal = (temperatura - 32) * (5 / 9) + 273.15
    }
    else if (document.getElementById("kc").checked) {
        resultadoFinal = temperatura - 273.15
    }
    else if (document.getElementById("kf").checked) {
        resultadoFinal = (temperatura - 273.15) * (9 / 5) + 32
    }

    //Com o resultado, ele o atribui para a página HTML
    document.getElementById("resultado").innerHTML = resultadoFinal
}
