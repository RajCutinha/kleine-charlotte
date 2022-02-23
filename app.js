const menuBtn = document.querySelector(".menubar-mobile div");
const navigationBar = document.querySelector("nav");

menuBtn.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  navigationBar.classList.toggle("active");
});

const diashowImgs = document.querySelector(".diashow").querySelectorAll("img");
const diashowPageination = document
  .querySelector(".diashow")
  .querySelectorAll("ul li");

let currentDiashowIndex = 0;

function diashow() {
  currentDiashowIndex++;
  if (currentDiashowIndex === diashowImgs.length) {
    currentDiashowIndex = 0;
    diashowImgs.forEach((img) => {
      img.style.transition = "unset";
      img.style.transform = "translateX(-" + currentDiashowIndex * 100 + "%)";
    });
    diashowPageination[currentDiashowIndex].classList.add("active");
    return;
  }

  if (!(currentDiashowIndex > diashowPageination.length - 1)) {
    diashowPageination[currentDiashowIndex].classList.add("active");
    diashowPageination[
      currentDiashowIndex
    ].previousElementSibling.classList.remove("active");
  } else {
    diashowPageination[currentDiashowIndex - 1].classList.remove("active");
    diashowPageination[currentDiashowIndex - currentDiashowIndex].classList.add(
      "active"
    );
  }

  diashowImgs.forEach((img) => {
    img.style.transition = "all 1s ease-in-out";
    img.style.transform = "translateX(-" + currentDiashowIndex * 100 + "%)";
  });
}

let diashowInterval = window.setInterval(diashow, 4000);

diashowPageination.forEach((index) => {
  index.addEventListener("click", (e) => {
    currentDiashowIndex = e.target.dataset.value;
    diashowImgs.forEach((img) => {
      img.style.transition = "all 1s ease-in-out";
      img.style.transform = "translateX(-" + currentDiashowIndex * 100 + "%)";
    });
    diashowPageination.forEach((pageNation) =>
      pageNation.classList.remove("active")
    );
    diashowPageination[currentDiashowIndex].classList.add("active");
    window.clearInterval(diashowInterval);
    diashowInterval = window.setInterval(diashow, 4000);
  });
});
