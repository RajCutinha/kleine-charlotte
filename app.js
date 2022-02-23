const menuBtn = document.querySelector(".menubar-mobile div");
const navigationBar = document.querySelector("nav");

menuBtn.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  navigationBar.classList.toggle("active");
});
