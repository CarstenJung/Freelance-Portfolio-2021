import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

/* gsap.registerPlugin(ScrollTrigger); */

gsap.to("nav", {
    scrollTrigger: ".section4", // start the animation when ".box" enters the viewport (once)
    x: 500,
    markers: true
});
