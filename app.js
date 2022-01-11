// ---------------Global variables-----------------------------

let options = ["Rock", "Paper", "Scissors"];
let answer;

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
    return "Player wins";
  } else if (
    (player === "Rock" && computer === "Paper") ||
    (player === "Paper" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Rock")
  ) {
    return "Computer wins";
  }
};

let i = 0;

while (i < 5) {
  let compOptionNum = Math.floor(Math.random() * 3);
  const compOption = getCompOption(compOptionNum);
  let playerOption = prompt("Enter your option");

  let newPlayerOption = playerOption.toLocaleLowerCase();
  playerOption = newPlayerOption[0].toUpperCase() + newPlayerOption.substring(1);
  console.log(playerOption);
  console.log(compOption);
  console.log(results(playerOption, compOption));
  i++;
}
