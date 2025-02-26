let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Please choose rock, paper, or scissors");
  if (
    humanChoice.toLowerCase() === "rock" ||
    humanChoice.toLowerCase() === "paper" ||
    humanChoice.toLowerCase() === "scissors"
  ) {
    return humanChoice.toLocaleLowerCase();
  } else {
    console.log("Please enter a valid choice");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You Win!!!");
    return humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log("It's a Tie!!");
    return;
  } else {
    console.log("Computer Wins!!!");
    return computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    human = getHumanChoice();
    comp = getComputerChoice();
    playRound(human, comp);

    console.log(`Your Score:${humanScore}  Computer Score: ${computerScore}`);
  }
  if (computerScore > humanScore) {
    console.log("The Computer Wins!!!");
  } else {
    console.log("You Win!!!");
  }
  computerScore = 0;
  humanScore = 0;
  return;
}
