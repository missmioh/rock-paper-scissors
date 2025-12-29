let humanScore = 0;
let computerScore = 0;

function playGame(clickSelection) {

    if (clickSelection === "Rock") {
        playRound("Rock", getComputerChoice());
    } else if (clickSelection === "Paper") {
        playRound("Paper", getComputerChoice());
    } else if (clickSelection === "Scissors") {
        playRound("Scissors", getComputerChoice());
    } else {
        console.log("Error!");
    }
    

    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice === computerChoice) {
            result.textContent = `${humanChoice} twice, it's a tie! Try again`;
        } else if ( (humanChoice === "Rock") && (computerChoice=== "Scissors") ) {
            humanScore++;
            result.textContent = `You win! Rock beats Scissors!`;
        } else if ( (humanChoice === "Rock") && (computerChoice === "Paper") ) {
            computerScore++;
            result.textContent = `You lose! Paper beats Rock!`;
        } else if ( (humanChoice === "Paper") && (computerChoice === "Scissors") ) {
            computerScore++;
            result.textContent = `You lose! Scissors beat Paper!`;
        } else if ( (humanChoice === "Paper") && (computerChoice === "Rock") ) {
            humanScore++;
            result.textContent = `You win! Paper beats Rock!`;
        } else if ( (humanChoice === "Scissors") && (computerChoice === "Paper") ) {
            humanScore++;
            result.textContent = `You win! Scissors beat Paper!`;
        } else if ( (humanChoice === "Scissors") && (computerChoice === "Rock") ) {
            computerScore++;
            result.textContent = `You lose! Rock beats Scissors!`;
        } else {
            playRound(getHumanChoice(), getComputerChoice());
        }
    }

    const pointsTracker = document.createElement("div");
    result.appendChild(pointsTracker);

    if (humanScore > computerScore) {
        pointsTracker.textContent = `Congratulations, you win with ${humanScore} points!`;
    } else if (humanScore < computerScore) {
        pointsTracker.textContent = `You lose ${computerScore}/${humanScore}, game over!`;
    } else {
        pointsTracker.textContent = `It's a tie! ${computerScore}/${humanScore}`;
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

// create and add buttons

const rockBtn = document.createElement("button");
rockBtn.setAttribute("id", "Rock");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.setAttribute("id", "Paper");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("id", "Scissors");
scissorsBtn.textContent = "Scissors";

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

// create and add div for results

const result = document.createElement("div");
result.setAttribute("id", "gameResult");

container.appendChild(result);

// click event listener for buttons

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let playerSelection = e.target.id;
        playGame(playerSelection);
    });
});


