const scrolBtnC = document.querySelector(".js-contact");
const scrolBtnA = document.querySelector(".js-arrow");

window.addEventListener("scroll", () => {
  scrolBtnC.classList.toggle("btns-active", window.scrollY > 500);
  scrolBtnA.classList.toggle("arrow-active", window.scrollY > 500);
});

scrolBtnA.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
