import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("nav", {
    x: 500,
    markers: true,
    scrollTrigger: {
        trigger:".section3",
        start: "top top"         
    } // start the animation when ".box" enters the viewport (once)
});