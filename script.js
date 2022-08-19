"use stict";
let number = Math.trunc(Math.random() * 20) + 1;
const message = function (message) {
  document.querySelector(".message").innerHTML = message;
};
const scoreDisplay = function (num) {
  document.querySelector(".score").innerHTML = num;
};
let score = Number(document.querySelector(".score").innerHTML);
let highscore = Number(document.querySelector(".highscore").innerHTML);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message("⛔ No Number");
  } else if (guess == number) {
    message("🎉 Correct No");
    if (highscore < score) {
      document.querySelector(".highscore").innerHTML = score;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").innerHTML = number;
  } else if (score >= 1) {
    if (guess > number) {
      message("📈Too High");
      score--;
      scoreDisplay(score);
    } else if (guess < number) {
      message("📉Too Low");
      score--;
      scoreDisplay(score);
    }
  } else {
    message("⭐ you lose the game");
    scoreDisplay(0);
    document.querySelector("body").style.backgroundColor = "#ff0000";
    alert("Start a new game by clicking on Again button ⭐");
  }
});
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  message("Start guessing...");
  scoreDisplay(20);
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".guess").innerHTML = "";
  score = 20;
});
