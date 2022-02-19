const menuBtn = document.querySelector(".menubar-mobile div");
const navigationBar = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  navigationBar.classList.toggle("active");
});
