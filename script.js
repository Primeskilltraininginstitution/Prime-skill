const carousel = document.querySelector('.carousel');
  const container = carousel.querySelector('.carousel-container');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let currentIndex = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }
    container.style.transform = `translateX(-${index * 300}px)`;
    currentIndex = index;
  }

  prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  // Optional: Automatically slide
  // setInterval(() => {
  //   showSlide(currentIndex + 1);
  // }, 2000);