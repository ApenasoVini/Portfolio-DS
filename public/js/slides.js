let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

if (totalSlides > 0) {
    function changeSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`; 
    }

    setInterval(changeSlide, 3000);
} 
