const homeScoreElement = document.querySelector(".home-score");
const guestScoreElement = document.querySelector(".guest-score");
const homeButtons = document.querySelectorAll(".score-home .buttons");
const guestButtons = document.querySelectorAll(".score-guest .buttons");
const newGameBtn = document.getElementById("newGameButton");

let homeScore = 0;
let guestScore = 0;

homeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    homeScore += index + 1;
    homeScoreElement.textContent = homeScore;
  });
});

guestButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    guestScore += index + 1;
    guestScoreElement.textContent = guestScore;
  });
});

newGameBtn.addEventListener("click", function () {
  homeScore = 0;
  guestScore = 0;
  homeScoreElement.textContent = homeScore;
  guestScoreElement.textContent = guestScore;
});
