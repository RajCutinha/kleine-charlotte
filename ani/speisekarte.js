import gsap, { Power4, Back } from "gsap";

const gridTl = gsap.timeline({ defaults: { duration: 0.3 } });
const gridChilds = document.querySelectorAll(".karte-grid a");

gridTl.fromTo(
  ".menu-section h1",
  { opacity: 0 },
  { opacity: 1, ease: Power4.easeInOut, duration: 0.5 }
);

gridChilds.forEach((children) => {
  gridTl.set(children, { opacity: 0, scale: 0, transformOrigin: "left" });

  gridTl.fromTo(
    children,
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, ease: Back.easeOut.config(4), stagger: 1 },
    "<"
  );
});
