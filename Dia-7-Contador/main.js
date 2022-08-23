let deadline = new Date("nov 20,2022 00:00:00").getTime();
const displayDays = document.querySelector(".days .display");
const displayHours = document.querySelector(".hours .display");
const displayMinutes = document.querySelector(".minutes .display");
const displaySeconds = document.querySelector(".seconds .display");
showTime();
let countDown = setInterval(() => {
  showTime();
}, 1000);

function showTime() {
  let now = new Date().getTime();

  let time = deadline - now;
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);

  displayDays.innerHTML = String(days).padStart(2, "0");
  displayHours.innerHTML = String(hours).padStart(2, "0");
  displayMinutes.innerHTML = String(minutes).padStart(2, "0");
  displaySeconds.innerHTML = String(seconds).padStart(2, "0");
  if (time < 0) {
    clearInterval(countDown);
  }
}
