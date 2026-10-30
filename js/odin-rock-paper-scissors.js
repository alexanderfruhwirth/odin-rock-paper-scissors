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

function playRound(humanChoice, computerChoice) {
  const roundResult = document.createElement("p");
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundResult.textContent = `Human player chose ${humanChoice} and computer player chose ${computerChoice}.
Human player wins (${humanChoice} beats ${computerChoice})!`;
    resultLog.appendChild(roundResult);
    return "human";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    roundResult.textContent = `Human player chose ${humanChoice} and computer player chose ${computerChoice}.
Computer player wins (${computerChoice} beats ${humanChoice})!`;
    resultLog.appendChild(roundResult);
    return "computer";
  } else if (humanChoice === computerChoice) {
    roundResult.textContent = `Human player chose ${humanChoice} and computer player chose ${computerChoice}.
Draw!`;
    resultLog.appendChild(roundResult);
    return;
  }
}

function trackGameStats(roundWinner) {
  if (roundWinner === "human") {
    humanScore++;
  } else if (roundWinner === "computer") {
    computerScore++;
  }
  round++;
  const currentScores = document.createElement("p");
  currentScores.textContent = `Current scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`;
  resultLog.appendChild(currentScores);
}

function checkEndGameCondition() {
  if (humanScore === 5) {
    const gameResult = document.createElement("p");
    gameResult.textContent = `Human player wins! Final player scores|| Human score: ${humanScore} Computer score: ${computerScore} ||`;
    resultLog.appendChild(gameResult);
    [humanScore, computerScore, round] = [0, 0, 0];
  } else if (computerScore === 5) {
    const gameResult = document.createElement("p");
    gameResult.textContent = `Computer player wins! Final player scores|| Human score: ${humanScore} Computer score: ${computerScore} ||`;
    resultLog.appendChild(gameResult);
    [humanScore, computerScore, round] = [0, 0, 0];
  }
}

function choose(choice) {
  const roundWinner = playRound(choice, getComputerChoice());
  trackGameStats(roundWinner);
  checkEndGameCondition();
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

const resultLog = document.querySelector("#result-log");

const btnRock = document.querySelector("#btn-rock");
btnRock.addEventListener("click", () => {
  choose("rock");
});

const btnPaper = document.querySelector("#btn-paper");
btnPaper.addEventListener("click", () => {
  choose("paper");
});

const btnScissors = document.querySelector("#btn-scissors");
btnScissors.addEventListener("click", () => {
  choose("scissors");
});
