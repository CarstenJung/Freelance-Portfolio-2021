import gsap from "gsap";

/* PORTFOLIO SLIDER ANIMATION MENU */
let menuProjectItems = gsap.timeline();

menuProjectItems
  .to("#menuProjectsItem1", {
    opacity: 1,
    display: "block",
    duration: 3,
  })
  .to("#menuProjectsItem1", {
    opacity: 0,
    display: "none",
    duration: 3,
  })
  .to("#menuProjectsItem2", {
    opacity: 1,
    display: "block",
    duration: 3,
  })
  .to("#menuProjectsItem2", {
    opacity: 0,
    display: "none",
    duration: 3,
  })
  /* .to("#menuProjectsItem3", {
    opacity: 1,
    display: "block",
    duration: 3,
  })
  .to("#menuProjectsItem3", {
    opacity: 0,
    display: "none",
    duration: 3,
  }) */
  .to("#menuProjectsItem4", {
    opacity: 1,
    display: "block",
    duration: 3,
  })
  .to("#menuProjectsItem4", {
    opacity: 0,
    display: "none",
    duration: 3,
  })
/*   .to("#menuProjectsItem5", {
    opacity: 1,
    display: "block",
    duration: 3,
  })
  .to("#menuProjectsItem5", {
    opacity: 0,
    display: "none",
    duration: 3,
  }) */
  .to("#menuProjectsItem6", {
    opacity: 1,
    display: "block",
    duration: 3,
  })
  .to("#menuProjectsItem6", {
    opacity: 0,
    display: "none",
    duration: 3,
  });
menuProjectItems.repeat(-1);

(function () {
  document.querySelectorAll(".burgerMenu").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.classList.toggle("active");

      /* PORTFOLIO SLIDER ANIMATION MENU */
      const menuOverlay = document.querySelector(".burgerMenu");

      if (menuOverlay.classList.contains("active")) {
        gsap.to(".logoContainer, .socialsContainer", {
          opacity: 0,
        });
        gsap.to(".menuOverlay", {
          opacity: 1,
          display: "flex",
          duration: 1,
          zIndex: 4,
        });
        gsap.to(".menuFlexContainer ul li", {
          y: 0,
          stagger: 0.1,
          duration: 2,
        });
        gsap.to(".menuFlexContainer h1, .officeFlexContainer h1", {
          opacity: 0.3,
          x: 0,
          duration: 3,
        });
        menuProjectItems.play();
      } else {
        gsap.to(".logoContainer, .socialsContainer", {
          opacity: 1,
        });
        gsap.to(".menuOverlay", {
          opacity: 0,
          display: "none",
          duration: 1,
        });
        gsap.to(".menuFlexContainer ul li", {
          y: -100,
          stagger: 0.1,
          duration: 2,
        });
        gsap.to(".menuFlexContainer h1, .officeFlexContainer h1", {
          opacity: 0,
          x: -100,
          duration: 3,
        });
        menuProjectItems.pause();
      }

      setTimeout(() => {
        const pathId = document.querySelector(".pathSVG");
        const svgStrokeColor = document.querySelector('#burgerSVG');

        if (btn.classList.contains("active")) {
          pathId.style.transform = "translateY(0px)";
        } else {
          pathId.style.transform =
            "translateY(-4px) translateX(23px) scaleX(0.5)";
        }
      }, 150);
    });
  });
})();

/*** CLOSE MENU ON MENU-ITEM CLICKED ***/
document.querySelectorAll(".toggleActive").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    if (document.querySelector(".burgerMenu").classList.contains("active")) {
      document.querySelector(".burgerMenu").classList.remove("active");
      gsap.to(".logoContainer, .socialsContainer", {
        opacity: 1,
      });
      gsap.to(".menuOverlay", {
        opacity: 0,
        display: "none",
        duration: 1,
      });
      gsap.to(".menuFlexContainer ul li", {
        y: -100,
        stagger: 0.1,
        duration: 2,
      });
      gsap.to(".menuFlexContainer h1, .officeFlexContainer h1", {
        opacity: 0,
        x: -100,
        duration: 3,
      });
      gsap.to(".pathSVG", {
        transform: "translateY(-4px) translateX(23px) scaleX(0.5)",
      });
      menuProjectItems.pause();
    }
  });
});
