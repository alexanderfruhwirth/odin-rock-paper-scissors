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
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    return "computer";
  } else if (humanChoice === computerChoice) {
    return "draw";
  }
}

function trackGameStats(roundWinner) {
  if (roundWinner === "human") {
    humanScore++;
  } else if (roundWinner === "computer") {
    computerScore++;
  }
  round++;
}

function checkEndGameCondition() {
  if (humanScore === 5) {
    return "human";
  } else if (computerScore === 5) {
    return "computer";
  }
  return false;
}

function announceRoundWinner(roundWinner, humanChoice, computerChoice) {
  const announcement = document.createElement("p");
  if (roundWinner === "human") {
    announcement.textContent = `Human player chose ${humanChoice} and computer player chose ${computerChoice}.
Human player wins this round (${humanChoice} beats ${computerChoice})!`;
    resultLog.appendChild(announcement);
  } else if (roundWinner === "computer") {
    announcement.textContent = `Human player chose ${humanChoice} and computer player chose ${computerChoice}.
Computer player wins this round (${computerChoice} beats ${humanChoice})!`;
    resultLog.appendChild(announcement);
  } else if (roundWinner === "draw") {
    announcement.textContent = `Human player chose ${humanChoice} and computer player chose ${computerChoice}.
This round ends in a draw!`;
    resultLog.appendChild(announcement);
  }
}

function announceScores() {
  const announcement = document.createElement("p");
  announcement.textContent = `Current scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`;
  resultLog.appendChild(announcement);
}

function announceGameWinner(gameWinner) {
  const announcement = document.createElement("p");
  if (gameWinner === "human") {
    announcement.textContent = `HUMAN PLAYER WINS THE GAME: Final scores|| Human player: ${humanScore} Computer player: ${computerScore} ||`;
    resultLog.appendChild(announcement);
  } else if (gameWinner === "computer") {
    announcement.textContent = `COMPUTER PLAYER WINS THE GAME: Final scores|| Human player: ${humanScore} Computer player: ${computerScore} ||`;
    resultLog.appendChild(announcement);
  }
}

function choose(humanChoice) {
  const resetCondition = checkEndGameCondition();
  if (resetCondition) {
    [humanScore, computerScore, round] = [0, 0, 0];
  }
  const computerChoice = getComputerChoice();
  const roundWinner = playRound(humanChoice, computerChoice);
  trackGameStats(roundWinner);
  announceRoundWinner(roundWinner, humanChoice, computerChoice);
  const gameWinner = checkEndGameCondition();
  if (gameWinner) {
    announceGameWinner(gameWinner);
  } else {
    announceScores();
  }
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
