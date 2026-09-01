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
  } else if (computerChoice < 1 / 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
