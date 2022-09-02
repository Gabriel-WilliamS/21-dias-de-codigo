const userKeyPress = document.querySelector(".keypress");
const boxKeyPress = document.querySelector(".box-keypress");
const easterEgg = document.querySelector(".easter-egg");
let points = 0;
window.addEventListener("keydown", (event) => {
  const keyName = event.key;
  const spanElement = document.createElement("span");

  spanElement.classList.add("keypress");
  spanElement.innerHTML = keyName;
  if (spanElement.textContent == " ") {
    spanElement.innerHTML = "Space";
  }
  boxKeyPress.append(spanElement);
  const allKeyPress = document.querySelectorAll(".keypress");

  if (allKeyPress.length == 8) {
    let points = 0;
    allKeyPress.forEach((keyPress, index) => {
      if (index == 0 && keyPress.textContent.toLowerCase() == "g") {
        points = points + 1;
      }
      if (index == 1 && keyPress.textContent.toLowerCase() == "a") {
        points = points + 1;
      }
      if (index == 2 && keyPress.textContent.toLowerCase() == "b") {
        points = points + 1;
      }
      if (index == 3 && keyPress.textContent.toLowerCase() == "r") {
        points = points + 1;
      }
      if (index == 4 && keyPress.textContent.toLowerCase() == "i") {
        points = points + 1;
      }
      if (index == 5 && keyPress.textContent.toLowerCase() == "e") {
        points = points + 1;
      }
      if (index == 6 && keyPress.textContent.toLowerCase() == "l") {
        points = points + 1;
      }

      keyPress.remove();
    });

    if (points == 7) {
      easterEgg.textContent =
        "Parabéns você descobriu a easter egg e logo vai ser contratado para sua primeira opurtunidade. #confiaDev";
    } else {
      points = 0;
    }
  }
  boxKeyPress.append(spanElement);
});
