function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Try again");
    } else if ( (humanChoice === "Rock") && (computerChoice === "Scissors") ) {
        humanScore++;
        console.log("You win! Rock beats Scissors!");
    } else if ( (humanChoice === "Rock") && (computerChoice === "Paper") ) {
        computerScore++;
        console.log("You lose! Paper beats Rock!");
    } else {
        alert("I still need to write this!");
    }
}

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Rock, Paper or Scissors?")

    if (userInput.toLowerCase() === "rock") {
        return "Rock";
    } else if (userInput.toLowerCase() === "paper") {
        return "Paper";
    } else if (userInput.toLowerCase() === "scissors") {
        return "Scissors";
    } else {
        alert("Please type in 'Rock', 'Paper' or 'Scissors!'")
    }
}