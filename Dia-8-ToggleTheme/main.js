const switchDark = document.querySelector(".switch .dark-mode");
const switchLight = document.querySelector(".switch .light-mode");
const BgDark = document.querySelector(".ToggleButton .dark-mode");
const BgLight = document.querySelector(".ToggleButton .light-mode");
const body = document.querySelector("body");
const paragraph1 = document.querySelector(".p1");
const paragraph2 = document.querySelector(".p2");

switchDark.addEventListener("click", () => {
  switchDark.classList.toggle("opacityZero");
  BgDark.classList.toggle("opacityZero");
  body.classList.toggle("dark-mode-page");
  switchLight.classList.toggle("opacityZero");
  BgLight.classList.toggle("opacityZero");

  if (switchDark.classList.contains("moveSwitchDark")) {
    switchDark.classList.remove("moveSwitchDark");
    switchLight.classList.remove("moveSwitchDark");
    switchDark.classList.add("moveSwitchLight");
    switchLight.classList.add("moveSwitchLight");
    paragraph2.classList.remove("hide");
    paragraph1.classList.add("hide");
  } else {
    switchDark.classList.remove("moveSwitchLight");
    switchLight.classList.remove("moveSwitchLight");
    switchDark.classList.add("moveSwitchDark");
    switchLight.classList.add("moveSwitchDark");
    paragraph2.classList.add("hide");
    paragraph1.classList.remove("hide");
  }
});
