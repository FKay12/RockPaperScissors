/* const choices = ['Rock', 'Paper', 'Scissors'];
//to read computer choice as a string
//let comp="";
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie" */

//DOM Method
const playerTxt = document.querySelector('.playerTxt');
const computerTxt = document.querySelector('.computerTxt');
const finalTxt = document.querySelector('.finalTxt');
const gameBtns = document.querySelectorAll('.gameBtns');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');


let pScore = 0;
let cScore = 0;
let player;
let computer;
let final;



gameBtns.forEach(button => button.addEventListener("click", () =>{


player = button.textContent;
computerTurn();
playerTxt.textContent=`You: ${player}`;
computerTxt.textContent=`Computer: ${computer}`;

finalTxt.textContent= checkWinner(); //invoke function
playerScore.textContent= `Your Score: ${pScore}`;
computerScore.textContent= `Computer Score: ${cScore}`;
} ));

function computerTurn(){
  const randNum = Math.floor(Math.random() * 3) + 1; //gives random number between 1 and 3

  switch(randNum){
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }

}

function checkWinner(){
  if (
    (player == 'Rock' && computer == 'Scissors') ||
    (player == 'Paper' && computer == 'Rock') ||
    (player == 'Scissors' && computer == 'Paper')
  ) {
    pScore++;
    return "You Win!";
  }
  else if (player === computer) {
    return "It's a Tie!";
    }
  
  else {
    cScore++;
    return "You Lose!"
  }
  
}

document.getElementById('resetBtn').addEventListener('click', function(){

  location.reload();
  return false;

});


/* if(player === computer){
    return "It's a Tie!";
  }
  else if(computer == "Rock"){
    pScore++;
    return(player=="Paper") ?  "You Win!":"You Lose!"
  }
  else if(computer == "Paper"){
    cScore++;
    return(player=="Scissors") ? "You Win!": "You Lose!"
  }
  else if(computer == "Scissors"){
    return(player=="Rock") ? "You Win!": "You Lose!"
  } */

//Player Input 
/* let playerSelection = prompt("Enter 'Rock', 'Paper' or 'Scissors'");
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
 */
//Random Computer Choice
/* function computerSelection(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    comp = arr[randomIndex];

    return item.toString();
} */

/* const array = ['Rock', 'Paper', 'Scissors'];
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
  else if (playerSelection === comp) {
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
    const comp = computerSelection();
    playRound(playerSelection, comp);
    console.log('Player Chose: ' + playerSelection);
    console.log('Computer Chose: ' + comp);
    console.log("Your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
  }
 */
  
  
