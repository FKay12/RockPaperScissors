
const choices = ['Rock', 'Paper', 'Scissors'];
//to read computer choice as a string
let comp="";

//Player Input 
let playerSelection = prompt("Enter 'Rock', 'Paper' or 'Scissors'");
if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') {
    console.log(`You Chose: ${playerSelection}`);
} else {
    console.log("Error, Try Again");
}



//Random Computer Choice
function computerSelection(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    comp = arr[randomIndex];

    return item.toString();
}

const array = ['Rock', 'Paper', 'Scissors'];
const result = computerSelection(array);
console.log('Computer Chose: ' + result);



function playRound() {
    
    if (
    (playerSelection == 'Rock' && comp == 'Scissors') ||
    (playerSelection == 'Paper' && comp == 'Rock') ||
    (playerSelection == 'Scissors' && comp == 'Paper')
    ) {
        console.log("You Win");
    }
    else if  (playerSelection == comp) {
        console.log("Tie Game!");
    }
    else {
        console.log("Computer Wins!");
    }
    console.log("Refresh Page to Play Again!");
}

playRound();