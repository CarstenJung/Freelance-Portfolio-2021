import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


/*BURGER MENU*/
let ScrollAnimations = gsap.timeline({
    scrollTrigger: {
        trigger: "nav",
        start: "bottom",
        scrub: .3,
    }
});

ScrollAnimations.to(".burgerMenu", {
    paddingTop: '0px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
});
/**********/ 

