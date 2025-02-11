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
  let hChoice = prompt("Choose paper, rock, or scissors").toLowerCase();

  if (hChoice === "paper" || hChoice === "rock" || hChoice === "scissors") {
    return hChoice;
  } else {
    console.log("Please enter a valid choice");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "it's a tie";
  } else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win";
  } else {
    computerScore++;
    return "Computer wins";
  }
}

function playGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  let result = playRound(humanChoice, computerChoice);
  console.log(result);
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}
for (i = 0; i < 5; i++) {
  playGame();
}

console.log(`Final Scores:`);
console.log(`Your Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);

if (humanScore > computerScore) {
  console.log(`You win!!!`);
} else {
  console.log(`Computer Wins!!!`);
}
