import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardTime = gsap.timeline({
  scrollTrigger: {
    trigger: ".card",
    scrub: true,
    start: "0% 110%",
    end: "100% bottom",
  },
  defaults: { duration: 1, ease: Power4.easeInOut },
});

cardTime
  .fromTo(".card h4", { opacity: 0 }, { opacity: 1, stagger: 3 })
  .fromTo(
    ".dish",
    { opacity: 0, color: "green" },
    { opacity: 1, color: "red", stagger: 1 },
    "<"
  );
