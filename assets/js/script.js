let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    const offset = -(currentSlide * 100);
    slidesContainer.style.transform = `translateX(${offset}%)`;
    currentSlide = (currentSlide + 1) % totalSlides;
}

if (totalSlides > 0) {
    setInterval(changeSlide, 8000);
}

function showArea(area) {
    const areas = document.querySelectorAll('.area-content');
    areas.forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(area).classList.add('active');
}
