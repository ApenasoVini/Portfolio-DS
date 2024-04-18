//Currículo
function curriculo() {
    var c = document.createElement('a');
    c.href = '../pdf/currículo.pdf';
    c.download = 'currículo.pdf';
    c.click();
    c.remove();
}

//Linguagens 
function lin1() {
    var l1 = document.createElement('a');
    l1.href = '../pdf/linguagens1.pdf';
    l1.download = 'linguagens1.pdf';
    l1.click();
    l1.remove();
}

//Matemática 
function mat() {
    window.open('https://www.youtube.com/watch?v=e-V4prJxsxY&ab_channel=Vin%C3%ADciusSoaresFran%C3%A7a', '_blank');
}

//Humanas 
function hum1() {
    var h1 = document.createElement('a');
    h1.href = '../pdf/humanas1.pdf';
    h1.download = 'humanas1.pdf';
    h1.click();
    h1.remove();
}

//Natureza 
function nat1() {
    window.open('https://www.youtube.com/watch?v=eA0hSTFzL2A&ab_channel=BernardoLa', '_blank');
}
