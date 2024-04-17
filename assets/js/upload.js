//Currículo
function curriculo(){
    var a = document.createElement('a');
    a.href = '/assets/pdf/currículo.pdf';
    a.download = 'currículo.pdf';
    a.click();
    a.remove();
}

//Linguagens Fev
function fevLing(){
    var a = document.createElement('a');
    a.href = '/assets/pdf/linguagensFev.pdf';
    a.download = 'linguagensFev.pdf';
    a.click();
    a.remove();
}