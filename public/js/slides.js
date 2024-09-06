let currentSlide = 0;
const slides = document.querySelectorAll('.slide-atividades');

function hideAllSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
}

function showSlide(index) {
    hideAllSlides();
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showSlide(currentSlide);