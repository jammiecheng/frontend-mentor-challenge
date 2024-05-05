const list = document.querySelectorAll("ul>li");
const buttons = document.querySelectorAll("ul>li>button");
const images = document.querySelectorAll("ul>li>button>img");
const descriptions = document.querySelectorAll("ul>li>p");

descriptions.forEach((element) => {
  element.classList.add("hidden");
});

buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    descriptions[index].classList.toggle("hidden");
    if (descriptions[index].classList.contains("hidden")) {
      images[index].setAttribute("src", "./assets/images/icon-plus.svg");
    } else {
      images[index].setAttribute("src", "./assets/images/icon-minus.svg");
    }
  });
});

window.addEventListener("load", () => {
  if (window.innerWidth > 375) {
    document.querySelector("body").style.backgroundImage =
      "url(./assets/images/background-pattern-desktop.svg)";
  } else {
    document.querySelector("body").style.backgroundImage =
      "url(./assets/images/background-pattern-mobile.svg)";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 375) {
    document.querySelector("body").style.backgroundImage =
      "url(./assets/images/background-pattern-desktop.svg)";
  } else {
    document.querySelector("body").style.backgroundImage =
      "url(./assets/images/background-pattern-mobile.svg)";
  }
});
