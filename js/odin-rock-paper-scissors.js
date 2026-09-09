function getComputerChoice() {
  const computerChoice = Math.random();
  if (computerChoice < 1 / 3) {
    return "rock";
  } else if (computerChoice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter either rock, paper or scissors: ");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `Human player chose ${humanChoice} and computer player chose ${computerChoice}.
Human player wins (${humanChoice} beats ${computerChoice})!`,
    );
    return "human";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(
      `Human player chose ${humanChoice} and computer player chose ${computerChoice}.
Computer player wins (${computerChoice} beats ${humanChoice})!`,
    );
    return "computer";
  } else if (humanChoice === computerChoice) {
    console.log(
      `Human player chose ${humanChoice} and computer player chose ${computerChoice}.
Draw!`,
    );
    return;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const winner = playRound(getHumanChoice(), getComputerChoice());
    if (winner === "human") {
      humanScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
    console.log(
      `Current scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`,
    );
  }

  if (humanScore > computerScore) {
    return `Human player wins! Final player scores|| Human score: ${humanScore} Computer score: ${computerScore} ||`;
  } else if (humanScore < computerScore) {
    return `Computer player wins! Final player scores|| Human score: ${humanScore} Computer score: ${computerScore} ||`;
  } else {
    return `The game ends in a draw! Final player scores|| Human score: ${humanScore} Computer score: ${computerScore} ||`;
  }
}

console.log(playGame());
