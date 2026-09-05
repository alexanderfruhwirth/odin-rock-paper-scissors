/* Pseudocode for computer choice
-- Getting the computer choice of rock, paper or scissors as a return value of a function --
- When this function is called, initialise a variable with a random number between 0 (inclusive) and 1 (exclusive) as its value
- If the variable's value is smaller than 1/3 return the string "rock"
- Else if the variable's value is smaller than 2/3 return the string "paper"
- Else return the string "scissors"
*/
function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice < 1 / 3) {
    return "rock";
  } else if (computerChoice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

/* Pseudocode for human choice
-- Getting the human choice of rock, paper or scissors as a return value of a function --
- When this function is called, prompt the user to enter "rock", "paper" or "scissors" and return the input
*/
function getHumanChoice() {
  return prompt("Enter either rock, paper or scissors: ");
}

/* Pseudocode for playing a round
-- Playing a round of rock paper scissors by taking the human and computer choices as arguments for a function
   that tracks the score of each player and logs player choices, the winner of the round and the current scores --
- When this function is called (assuming valid humanChoice and computerChoice arguments):
- Compare each combination of humanChoice and computerChoice (normalise humanChoice to lower case so
  capitalisation does not affect the comparison)
- Increment the score of the winner using the global humanScore and computerScore variables
- Log a message to the console that announces player choices, the winner of the round and the current scores
*/
function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      console.log(
        `Human player chose ${humanChoice.toLowerCase()} and computer player chose ${computerChoice}.
Computer player wins (${computerChoice} beats ${humanChoice.toLowerCase()})!
Scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`,
      );
    } else if (computerChoice === "scissors") {
      humanScore++;
      console.log(
        `Human player chose ${humanChoice.toLowerCase()} and computer player chose ${computerChoice}.
Human player wins (${humanChoice.toLowerCase()} beats ${computerChoice})!
Scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`,
      );
    } else if (computerChoice === humanChoice.toLowerCase()) {
      console.log(
        `Human player chose ${humanChoice.toLowerCase()} and computer player chose ${computerChoice}.
Draw!
Scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`,
      );
    }
  } else if (humanChoice.toLowerCase() === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      console.log(
        `Human player chose ${humanChoice.toLowerCase()} and computer player chose ${computerChoice}.
Computer player wins (${computerChoice} beats ${humanChoice.toLowerCase()})!
Scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`,
      );
    } else if (computerChoice === "rock") {
      humanScore++;
      console.log(
        `Human player chose ${humanChoice.toLowerCase()} and computer player chose ${computerChoice}.
Human player wins (${humanChoice.toLowerCase()} beats ${computerChoice})!
Scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`,
      );
    } else if (computerChoice === humanChoice.toLowerCase()) {
      console.log(
        `Human player chose ${humanChoice.toLowerCase()} and computer player chose ${computerChoice}.
Draw!
Scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`,
      );
    }
  } else if (humanChoice.toLowerCase() === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      console.log(
        `Human player chose ${humanChoice.toLowerCase()} and computer player chose ${computerChoice}.
Computer player wins (${computerChoice} beats ${humanChoice.toLowerCase()})!
Scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`,
      );
    } else if (computerChoice === "paper") {
      humanScore++;
      console.log(
        `Human player chose ${humanChoice.toLowerCase()} and computer player chose ${computerChoice}.
Human player wins (${humanChoice.toLowerCase()} beats ${computerChoice})!
Scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`,
      );
    } else if (computerChoice === humanChoice.toLowerCase()) {
      console.log(
        `Human player chose ${humanChoice.toLowerCase()} and computer player chose ${computerChoice}.
Draw!
Scores|| Human player: ${humanScore}, Computer player: ${computerScore} ||`,
      );
    }
  }
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());

/*Pseudocode for playing a game
-- Playing a game of rock paper scissors for 5 rounds using a function called playGame that calls
   the playRound function 5 times, tracks humanScore and computerScore and declares a round winner
   for each round and a final winner at the end of a complete game --
- When the playGame function is called set humanScore and computerScore variables with the value 0
- For 5 iterations call the playRound function with the getHumanChoice and getComputerChoice functions as arguments
- Rework the playRound function to return the string "human" (human player wins), "computer" (computer player wins)
  or nothing[undefined] (the round ends in a draw)
- After each round increment humanScore or computerScore inside the playGame function depending on the playRound outcome
- Keep the choice and outcome announcements for each round inside the playRound function, but move the scores announcement
  for each round from the playRound function to the playGame function where the scores are tracked
- After the final round announce the final outcome
*/
