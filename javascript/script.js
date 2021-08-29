const scrolBtnC = document.querySelector(".js-contact");
const scrolBtnA = document.querySelector(".js-arrow");
const hamburger = document.querySelector(".hamburder");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar__list");
const animations = document.querySelectorAll(".animation");

window.addEventListener("scroll", () => {
  scrolBtnC.classList.toggle("btns-active", window.scrollY > 500);
  scrolBtnA.classList.toggle("arrow-active", window.scrollY > 500);
});

// scrolBtnA.addEventListener("click", () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// });

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("navbar-active");
});

navbar.addEventListener("click", (e) => {
  if (e.target === navbar) {
    navbar.classList.remove("navbar-active");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("navbar-active");
  });
});

window.addEventListener("scroll", () => {
  for (let i = 0; i < animations.length; i++) {
    let windowHeight = window.innerHeight;
    let animationTop = animations[i].getBoundingClientRect().top;
    let animationPoint = 50;

    if (animationTop < windowHeight - animationPoint) {
      animations[i].classList.add("animation-active");
    } else {
      animations[i].classList.contains("animation-active") &&
        animations[i].classList.remove("animation-active");
    }
  }
});
