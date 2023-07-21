import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', () => {
  const btnBack = document.querySelector('.left');
  const btnForward = document.querySelector('.right');
  const slides = [...document.querySelectorAll('.testimonial')];

  let clickable = true;
  let activeIndex = 0;

  function initSlider() {
    gsap.set(slides, { autoAlpha: 0 }); // Hide all slides initially
    gsap.set(slides[activeIndex], { autoAlpha: 1 }); // Show the first slide
    slides[activeIndex].classList.add('active'); // Add 'active' class to the first slide
  }

  function changeSlide(forward) {
    if (clickable) {
      clickable = false;

      const prevSlide = slides[activeIndex];
      activeIndex = forward ? (activeIndex + 1) % slides.length : (activeIndex - 1 + slides.length) % slides.length;
      const newSlide = slides[activeIndex];

      gsap.to(prevSlide, { autoAlpha: 0, duration: 0.3, onComplete: () => {
        prevSlide.classList.remove('active'); // Remove 'active' class from the previous slide
      }});

      setTimeout(() => {
      gsap.to(newSlide, { autoAlpha: 1, duration: 0.3, onComplete: () => {
        newSlide.classList.add('active'); // Add 'active' class to the new active slide
        clickable = true;
      }});
      }, 300); // Delay the addition of "active" class until after the animation duration
    }
  }

  /* EVENT LISTENERS */
  btnForward.addEventListener('click', () => {
    changeSlide(true);
  });

  btnBack.addEventListener('click', () => {
    changeSlide(false);
  });

  initSlider();
});



/* document.addEventListener('DOMContentLoaded', () => {
  const SLIDEDURATION = 300;
  const btnBack = document.querySelector('.left');
  const btnForward = document.querySelector('.right');
  const slides = [...document.querySelectorAll('.testimonial')];

  let clickable = true;
  let active = null;
  let newActive = null;

  function initSlider() {
    slides.forEach(slide => {
      slide.setAttribute('style', `animation-duration: ${SLIDEDURATION}ms`);
    });
  }

  function changeSlide(forward) {
    if (clickable) {
      clickable = false;
      active = document.querySelector('.active');
      const slideIndex = slides.indexOf(active);

      if (forward) {
        newActive = slides[(slideIndex + 1) % slides.length];
        active.classList.add('moveOutLeft');
        newActive.classList.add('moveInRight');

        setTimeout(() => {
          active.classList.remove('active', 'moveOutLeft');
          newActive.classList.add('active');
          clickable = true;
        }, SLIDEDURATION); // Delay the addition of "active" class until after the animation duration
      } else {
        newActive = slides[(slideIndex - 1 + slides.length) % slides.length];
        active.classList.add('moveOutRight');
        newActive.classList.add('moveInLeft');

        setTimeout(() => {
          active.classList.remove('active', 'moveOutRight');
          newActive.classList.add('active');
          clickable = true;
        }, SLIDEDURATION); // Delay the addition of "active" class until after the animation duration
      }
    }
  }

  btnForward.addEventListener('click', () => {
    changeSlide(true);
  });

  btnBack.addEventListener('click', () => {
    changeSlide(false);
  });

  initSlider();
});
 */