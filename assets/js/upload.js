//Currículo
function curriculo() {
    var a = document.createElement('a');
    a.href = '../pdf/currículo.pdf';
    a.download = 'currículo.pdf';
    a.click();
    a.remove();
}

//Linguagens Fev
function fevLin() {
    var a = document.createElement('a');
    a.href = '../pdf/linguagensFev.pdf';
    a.download = 'linguagensFev.pdf';
    a.click();
    a.remove();
}

//Matemática Fev
function fevMat() {
    window.open('https://www.youtube.com/watch?v=e-V4prJxsxY&ab_channel=Vin%C3%ADciusSoaresFran%C3%A7a', '_blank');
}

//Humanas Fev
function fevHum() {
    var a = document.createElement('a');
    a.href = '../pdf/humanasFev.pdf';
    a.download = 'humanasFev.pdf';
    a.click();
    a.remove();
}

//Natureza Fev
function fevNat() {
    window.open('https://www.youtube.com/watch?v=eA0hSTFzL2A&ab_channel=BernardoLa', '_blank');
}
