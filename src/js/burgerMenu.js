(function () {
  document.querySelectorAll('.burgerMenu').forEach(btn => {
    btn.addEventListener('click', e => {
      btn.classList.toggle('active');

      setTimeout(() => {
        const pathId = document.querySelector('.pathSVG')
        if (btn.classList.contains('active')) {
          pathId.style.transform = 'translateY(0px)'
        } else {
          pathId.style.transform = 'translateY(-4px) translateX(23px) scaleX(50%)'
        }
      }, 150);
    });
  });
})();