import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


function noScroll() {
  window.scrollTo(0, 0)
}

var startAnimation = gsap.timeline({
  delay: 0.5, onStart: () => {
    window.addEventListener('scroll', noScroll)
  }
});

if (localStorage.getItem("animationShowed", "true")) {
  document.querySelector(".staggerAnimation").style.display = "none";
  document.querySelector(".animationBcg").style.display = "none";
} else {
  startAnimation
    .fromTo("#CTop", { drawSVG: "0%"}, { drawSVG: "100%", duration: 1 })
    .fromTo("#CBottom", { drawSVG: "0%" }, { drawSVG: "100%", duration: 1 })
    .fromTo("#JTop", { drawSVG: "0%" }, { drawSVG: "100%", duration: 1 })
    .to("#CTop, #CBottom", { fill: "#fff", duration: 2 })
    .to(
      "#JTop",
      {
        fill: "#ffcd48",
        duration: 2.3,
        onComplete: () => {
          document.querySelector(".wrapper").classList.remove("isLoading");
        },
      },
      "-=2"
    )
    .to(".startAnimationWrapper", { autoAlpha: 0, duration: 2 })
    .to(
      ".staggerItem",
      {
        rotationY: -90,
        stagger: 0.1,
        ease: "power1.out",
        transformOrigin: "center center",
      },
      "-=0.6"
    )
    .to(".staggerAnimation, .animationBcg", {
      display: "none",
      onComplete: () => {
        localStorage.setItem("animationShowed", "true");
        window.removeEventListener('scroll', noScroll)
      },
    });
}
