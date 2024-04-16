document.getElementById('download').addEventListener('click', function () {
    var a = document.createElement('a');
    a.href = '/assets/pdf/currículo.pdf';
    a.download = 'currículo.pdf';
    a.click();
    a.remove();
});