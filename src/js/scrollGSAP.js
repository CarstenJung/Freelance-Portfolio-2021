import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

setTimeout(() => {
/*BURGER MENU*/
gsap.to(".burgerMenu", {
  paddingTop: "0px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  scrollTrigger: {
    trigger: "nav",
    start: "top",
    scrub: 0.3,
  },
});

/* GO BACK BTN */
  gsap.to(".goBack", {
    opacity: 1,
    delay: 1,
    duration: 3,
    scrollTrigger: {
      trigger: ".section5",
      start: "top 20%",
    },
  });
}, 7000);

/*HIDE COOKIE CONSENT*/
gsap.to(".cookieConsent", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".textarea",
    start: "top",
    markers: true,
    scrub: .1,
  },
});