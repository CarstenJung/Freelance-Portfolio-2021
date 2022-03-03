document.addEventListener('DOMContentLoaded', () => {
  const SLIDEDURATION = 900;
  const btnBack = document.querySelector('.left');
  const btnForward = document.querySelector('.right');
  const slides = [...document.querySelectorAll('.testimonial')];
  
  let clickable = true;
  let active = null;
  let newActive = null;
  
  
  function initSlider() {
    slides.forEach(slide => {
      slide.setAttribute(
        'style',
        `animation-duration: ${SLIDEDURATION}ms`
      )
    })
  }
  
  function changeSlide(forward) {
    if(clickable) {
      clickable = false;
      active = document.querySelector('.active');
      const slideIndex = slides.indexOf(active);
      
      if (forward) {
        newActive = slides[(slideIndex + 1) % slides.length];
        active.classList.add('moveOutLeft')
        newActive.classList.add('moveInRight', 'active')
      } else {
        newActive = slides[(slideIndex - 1 + slides.length) % slides.length];
        active.classList.add('moveOutRight');
        newActive.classList.add('moveInLeft', 'active')
      }
    }  
  }
  
  slides.forEach(slide => {
    slide.addEventListener('animationend', () => {
      if(active && !clickable) {
        clickable = true;
        active.className = 'testimonial';
      }
    })
  })
  
  /* EVENT LISTENER */
  btnForward.addEventListener('click', () => {
    changeSlide(true);
  })
  
   btnBack.addEventListener('click', () => {
    changeSlide(false);
  })
  
  initSlider();
})