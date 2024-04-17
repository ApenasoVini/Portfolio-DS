//Currículo
document.getElementById('download-curriculo').addEventListener('click', function () {
    var a = document.createElement('a');
    a.href = '/assets/pdf/currículo.pdf';
    a.download = 'currículo.pdf';
    a.click();
    a.remove();
});

//Linguagens Fev
document.getElementById('download-fev-ling').addEventListener('click', function () {
    var a = document.createElement('a');
    a.href = '/assets/pdf/linguagensFev.pdf';
    a.download = 'linguagensFev.pdf';
    a.click();
    a.remove();
});