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
