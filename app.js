// ---------------Global variables-----------------------------

let options = ["Rock", "Paper", "Scissors"];
let computerScoreElement = document.querySelector(".computer-score");
let playerScoreElement = document.querySelector(".player-score");
let computerScore = Number(
  document.querySelector(".computer-score").textContent
);
let playerScore = Number(document.querySelector(".player-score").textContent);
let buttons = document.querySelectorAll(".buttons");

// ---------------Functions-----------------------------

const getCompOption = (num) => {
  return options[num];
};

const results = (player, computer) => {
  if (player === computer) {
    return "Its a draw";
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    playerScore++;
    playerScoreElement.textContent = playerScore;
    return "Player wins";
  } else if (
    (player === "Rock" && computer === "Paper") ||
    (player === "Paper" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Rock")
  ) {
    computerScore++;
    computerScoreElement.textContent = computerScore;
    return "Computer wins";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerOption = e.target.className;
    if (computerScore === 5 || playerScore === 5) {
      e.disabled = true;
    } else {
      playGround(playerOption);
    }
  });
});

const playGround = (playerOption) => {
  let compOptionNum = Math.floor(Math.random() * 3);
  const compOption = getCompOption(compOptionNum);
  console.log(playerOption);
  console.log(compOption);
  console.log(results(playerOption, compOption));
};
