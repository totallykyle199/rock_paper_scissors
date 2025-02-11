let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random(3) * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let hChoice = prompt("Choose paper, rock, or scissors");

  if (hChoice === "paper" || hChoice === "rock" || hChoice === "scissors") {
    return hChoice;
  } else {
    console.log("Please enter a valid choice");
    return getHumanChoice();
  }
}

function playGame() {
  getComputerChoice();
  getHumanChoice();
}
