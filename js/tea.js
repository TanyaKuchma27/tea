const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const startHeader = document.querySelector('.start-header');
const nextHeader = document.querySelector('.next-header');
const peppermintProduct = document.querySelector('.peppermint-box');

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
  peppermintProduct.classList.add('product');
  peppermintProduct.classList.remove('peppermint-product');
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
  peppermintProduct.classList.add('product');
  peppermintProduct.classList.remove('peppermint-product');
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

document.addEventListener('touchstart', handleTouchStart, false);  
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;                                                        
let yDown = null;                                                        

function handleTouchStart(evt) {                                         
  xDown = evt.touches[0].clientX;                                      
  yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
  if ( ! xDown || ! yDown ) {
    return;
  }

  const xUp = evt.touches[0].clientX;                                    
  const yUp = evt.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;
  
  if ( Math.abs( xDiff ) > Math.abs( yDiff ) )
    if ( xDiff > 0 ) {
      /* left swipe */ 
      nextSlide();
    } else {
      /* right swipe */
      prevSlide();
    }                       

    xDown = null;
    yDown = null;                                             
};