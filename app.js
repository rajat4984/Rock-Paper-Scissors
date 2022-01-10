// ---------------Global variables-----------------------------

let options = ["Rock", "Paper", "Scissors"];
let compOptionNum = Math.floor(Math.random() * 3);
let answer;

let playerOption = prompt("Enter your option");
let newPlayerOption = playerOption.toLocaleLowerCase();
playerOption = newPlayerOption[0].toUpperCase() + newPlayerOption.substring(1);

// ---------------Functions-----------------------------


const getPlayerOption = (num) => {
  return options[num];
};

const getCompOption = (num) => {
  return options[num];
};

const results = (player, computer) => {
  if (player === computer) {
    return  "Its a draw";
  } 
  else if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
    return "Player wins";
  }
  else if(player === "Rock" && computer === "Paper" || player === "Paper" && computer === "Scissors" || player === "Scissors" && computer === "Rock"){
      return "Computer wins";
  }
};


const compOption = getCompOption(compOptionNum);
console.log(playerOption);
console.log(compOption);
console.log(results(playerOption, compOption));

