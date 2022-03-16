import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


var startAnimation = gsap.timeline({
  delay: .5
});

/* gsap.set('.staggerItem', {perspective: '1200px'}) */

startAnimation.fromTo('#CTop', {drawSVG: '0%'}, {drawSVG: '100%', duration: 1})
.fromTo('#CBottom', {drawSVG: '0%'}, {drawSVG: '100%', duration: 1})
.fromTo('#JTop', {drawSVG: '0%'}, {drawSVG: '100%', duration: 1})
.to('#CTop, #CBottom', {fill: '#fff', duration: 2})
.to('#JTop', {fill: '#ffcd48', duration: 2.3}, '-=2')
.to('.startAnimationWrapper', {autoAlpha: 0, duration: 2})
.to('.staggerItem', {rotationY: -90, stagger: .1, ease: "power1.out", transformOrigin: "center center"}, '-=0.6')
.to('.staggerAnimation, .animationBcg', { display: 'none' })