import { emojis } from "./emoji.js";

const main = document.querySelector("main");

emojis.forEach((emoji) => {
  const elementP = document.createElement("p");
  elementP.addEventListener("click", (e) => {
    teste(e.target.textContent);
    navigator.clipboard.writeText(e.target.textContent);
  });
  elementP.innerHTML = `${emoji}`;
  main.append(elementP);
});

function teste(emoji) {
  Toastify({
    text: `Emoji ${emoji} copiado!`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)"
    }
  }).showToast();
}
