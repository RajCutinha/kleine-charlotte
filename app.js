const menuBtn = document.querySelector(".menubar-mobile div");
const navigationBar = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  console.log(menuBtn);
  navigationBar.classList.toggle("active");
});
