//Currículo
function curriculo() {
    var a = document.createElement('a');
    a.href = './public/pdf/currículo.pdf';
    a.download = 'currículo.pdf';
    a.click();
    a.remove();
}

//Linguagens 
function lin1() {
    var a = document.createElement('a');
    a.href = '../pdf/linguagens1.pdf';
    a.download = 'linguagens1.pdf';
    a.click();
    a.remove();
}

//Matemática 
function mat() {
    window.open('https://www.youtube.com/watch?v=e-V4prJxsxY&ab_channel=Vin%C3%ADciusSoaresFran%C3%A7a', '_blank');
}

//Humanas 
function hum1() {
    var a = document.createElement('a');
    a.href = '../pdf/humanas1.pdf';
    a.download = 'humanas1.pdf';
    a.click();
    a.remove();
}

//Natureza 
function nat1() {
    window.open('https://www.youtube.com/watch?v=eA0hSTFzL2A&ab_channel=BernardoLa', '_blank');
}
