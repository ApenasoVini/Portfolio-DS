function converte() {
    var temperatura = Number(document.getElementById("temperatura").value)
    var resultadoFinal = 0
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

    document.getElementById("resultado").innerHTML = resultadoFinal
}