import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

document.addEventListener("DOMContentLoaded", function() {

let scrollIndicator = gsap.timeline({delay: 9});

scrollIndicator.set('#indicatorDot', {opacity: 0}, '-=10')
.fromTo('#indicatorFrame', {drawSVG: 0}, {drawSVG: 100, duration: 1.3})
.fromTo('#indicatorDot', {y:0, opacity: 1}, {y: 10, duration: 2, opacity: 0, repeat: -1}, '+=.8')

})


