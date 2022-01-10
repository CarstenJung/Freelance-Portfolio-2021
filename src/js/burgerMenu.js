(function () {
    /* BURGER MENU ANIMATION  */
  let menuElement = document.querySelector(".burger");

  menuElement.addEventListener("click", () => {
    if(menuElement.classList.contains('open')) {
        menuElement.classList.remove('open')
    } else {
        menuElement.classList.add('open')
    }
  });
})();
