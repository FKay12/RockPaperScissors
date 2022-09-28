const choices = ['Rock', 'Paper', 'Scissors'];
//to read computer choice as a string
//let comp="";
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"
//Player Input 
let playerSelection = prompt("Enter 'Rock', 'Paper' or 'Scissors'");
if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') {
    console.log(`You Chose: ${playerSelection}`);
} else {
    console.log("Error, Try Again");
}

function computerSelection() {
    let random = Math.random();
    if (random <= 0.3333) {
      return "Paper";
    } else if (random >= 0.6666) {
      return "Rock";
    } else {
      return "Scissors";
    }
  }

//Random Computer Choice
/* function computerSelection(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    comp = arr[randomIndex];

    return item.toString();
} */

const array = ['Rock', 'Paper', 'Scissors'];
const result = computerSelection(array);
console.log('Computer Chose: ' + result);


function playRound(playerSelection, comp) {
    
    if (
    (playerSelection == 'Rock' && comp == 'Scissors') ||
    (playerSelection == 'Paper' && comp == 'Rock') ||
    (playerSelection == 'Scissors' && comp == 'Paper')
    ) {
        playerScore++;
        return win;
    }
    else if  (playerSelection === comp) {
        console.log("Tie Game!");
    }
    else {
        computerScore++;
        console.log("Computer Wins!");
    }
    //console.log("Refresh Page to Play Again!");
}

playRound();


for(var i=0;i<5;i++){
    let playerSelection = prompt("Pick a move");
    const comp = computerSelection()
    console.log(playRound(playerSelection, comp))
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
  }