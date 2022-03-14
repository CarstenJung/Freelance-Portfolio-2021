var startAnimation = gsap.timeline({
  delay: .5
});

startAnimation.fromTo('#CTop', {drawSVG: '0%'}, {drawSVG: '100%', duration: 1})
.fromTo('#CBottom', {drawSVG: '0%'}, {drawSVG: '100%', duration: 1})
.fromTo('#JTop', {drawSVG: '0%'}, {drawSVG: '100%', duration: 1})
.to('#CTop, #CBottom', {fill: '#fff', duration: 2})
.to('#JTop', {fill: '#ffcd48', duration: 2}, '-=2')
//.to('.circle', {scale: 1, duration: 1.3})
.to('.startAnimationWrapper', {opacity: 0, duration: 1})
.to('.animationBcg', {opacity: 0, duration: 1}, '-=1')