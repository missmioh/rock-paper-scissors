let humanScore = 0;
let computerScore = 0;

function playGame(thing) {

    if (thing === "Rock") {
        playRound("Rock", getComputerChoice());
    }
    
//    rockBtn.addEventListener("click", playRound("Rock", getComputerChoice()));

    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice === computerChoice) {
            console.log(`${humanChoice} twice, it's a tie! Try again`);
        } else if ( (humanChoice === "Rock") && (computerChoice=== "Scissors") ) {
            humanScore++;
            console.log("You win! Rock beats Scissors!");
        } else if ( (humanChoice === "Rock") && (computerChoice === "Paper") ) {
            computerScore++;
            console.log("You lose! Paper beats Rock!");
        } else if ( (humanChoice === "Paper") && (computerChoice === "Scissors") ) {
            computerScore++;
            console.log("You lose! Scissors beat Paper!");
        } else if ( (humanChoice === "Paper") && (computerChoice === "Rock") ) {
            humanScore++;
            console.log("You win! Paper beats Rock!");
        } else if ( (humanChoice === "Scissors") && (computerChoice === "Paper") ) {
            humanScore++;
            console.log("You win! Scissors beat Paper!");
        } else if ( (humanChoice === "Scissors") && (computerChoice === "Rock") ) {
            computerScore++;
            console.log("You lose! Rock beats Scissors!");
        } else {
            playRound(getHumanChoice(), getComputerChoice());
        }
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations, you win with ${humanScore} points!`);
    } else if (humanScore < computerScore) {
        console.log(`You lose ${computerScore}/${humanScore}, game over!`);
    } else {
        console.log("It's a tie!");
    }
}

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
            alert("Please type only 'Rock', 'Paper' or 'Scissors!'");
        }
}

const container = document.querySelector("#container");

const rockBtn = document.createElement("button");
rockBtn.setAttribute("id", "Rock");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.setAttribute("id", "paperButton");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("id", "scissorsButton");
scissorsBtn.textContent = "Scissors";

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let playerSelection = e.target.id;
        playGame(playerSelection);
    });
});

const result = document.createElement("div");
result.setAttribute("id", "gameResult");

