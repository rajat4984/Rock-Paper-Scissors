// ---------------Global variables-----------------------------

let options = ["Rock", "Paper", "Scissors"];
let computerScoreElement = document.querySelector(".computer-score");
let playerScoreElement = document.querySelector(".player-score");
let computerScore = Number(
  document.querySelector(".computer-score").textContent
);
let playerScore = Number(document.querySelector(".player-score").textContent);
let buttons = document.querySelectorAll(".buttons");
let popupButton = document.querySelector(".pop-up-button");
let popupText = document.querySelector(".pop-up-text");
let popup = document.querySelector("#pop-up");
let winnerTextElement = document.querySelector(".winner-text");
let winnerText;
// ---------------Functions-----------------------------

const getCompOption = (num) => {
  return options[num];
};

const results = (player, computer) => {
  if (player === computer) {
    winnerTextElement.textContent = "Its a draw";
    winnerTextElement.style.color = "yellow";
    console.log("Its a draw");
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    playerScore++;
    winnerTextElement.textContent = `${player} beats ${computer} , well done `;
    winnerTextElement.style.color = "green";
    playerScoreElement.textContent = playerScore;

    console.log("player won");
  } else if (
    (player === "Rock" && computer === "Paper") ||
    (player === "Paper" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Rock")
  ) {
    computerScore++;
    winnerTextElement.textContent = `${computer} beats ${player} , oh no `;
    winnerTextElement.style.color = "red";
    computerScoreElement.textContent = computerScore;
    console.log("Computer won");
  }
  checkWinner();
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerOption = e.target.className;
    playGround(playerOption);
  });
});

const checkWinner = () => {
  if (computerScore === 5) {
    let winnerText = "Computer won the game";
    willPlayAgain(winnerText, "red");
  } else if (playerScore === 5) {
    let winnerText = "You won the game";
    willPlayAgain(winnerText, "green");
  } else {
    return true;
  }
};

const playGround = (playerOption) => {
  let compOptionNum = Math.floor(Math.random() * 3);
  const compOption = getCompOption(compOptionNum);
  console.log(playerOption);
  checkWinner();
  results(playerOption, compOption);
};

const willPlayAgain = (winnerText, color) => {
  popupText.textContent = winnerText;
  popupText.style.color = color;
  popup.style.display = "block";
};

popupButton.addEventListener("click", () => {
  popup.style.display = "none";
  resetGame();
});

//RESET GAME
const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  winnerTextElement.textContent = "Lets start the game";
  winnerTextElement.style.color = "white";
};
