const menuHamburger = document.querySelector(".hambMenu");
const ul = document.querySelector("ul");
menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("open");
  ul.classList.toggle("open");
});
