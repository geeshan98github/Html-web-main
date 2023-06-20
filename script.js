const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const slideWidth = sliderContainer.offsetWidth;
const slideCount = slides.childElementCount;

function showSlide(index) {
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slideCount) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideCount - 1;
  }
  showSlide(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

setInterval(nextSlide, 3000);

showSlide(currentIndex);
