// main.js
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-text h1", {
  scrollTrigger: {
    trigger: ".hero-text h1",
    start: "top 80%", // when h1 is 80% down the viewport
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".hero-text p", {
  scrollTrigger: {
    trigger: ".hero-text p",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});

gsap.from(".hero-text a", {
  scrollTrigger: {
    trigger: ".hero-text a",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.6,
  ease: "power2.out"
});
