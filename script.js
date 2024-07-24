let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;

function showSlide(carouselIndex, index) {
    const carousel = document.getElementById(`carousel${carouselIndex}`);
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    if (index >= totalItems) index = 0;
    if (index < 0) index = totalItems - 1;

    carousel.querySelector('.carousel-inner').style.transform = `translateX(${-index * 100}%)`;

    if (carouselIndex === 1) currentIndex1 = index;
    if (carouselIndex === 2) currentIndex2 = index;
    if (carouselIndex === 3) currentIndex3 = index;
}

function nextSlide(carouselIndex) {
    if (carouselIndex === 1) showSlide(1, currentIndex1 + 1);
    if (carouselIndex === 2) showSlide(2, currentIndex2 + 1);
    if (carouselIndex === 3) showSlide(3, currentIndex3 + 1);
}

function prevSlide(carouselIndex) {
    if (carouselIndex === 1) showSlide(1, currentIndex1 - 1);
    if (carouselIndex === 2) showSlide(2, currentIndex2 - 1);
    if (carouselIndex === 3) showSlide(3, currentIndex3 - 1);
}

// Initialize the first slide
showSlide(1, 0);
showSlide(2, 0);
showSlide(3, 0);

// sidebar menu js

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }