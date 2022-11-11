const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const startHeader = document.querySelector('.start-header');
const nextHeader = document.querySelector('.next-header');

let index = 0;

function activeSlide(n) {
  for(const slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

function nextSlide() {
  startHeader.classList.add('none');
  nextHeader.classList.remove('none');
  if(index === slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);;
  }
}

function prevSlide() {
  startHeader.classList.add('none');
  nextHeader.classList.remove('none');
  if(index === 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);