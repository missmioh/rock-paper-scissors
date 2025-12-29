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
        alert("Error!");
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
            console.log("Error");
        }
    }

    // displaying of results

    if (humanScore > computerScore) {
        pointsTracker.textContent = `Congratulations, you win with ${humanScore} points!`;
    } else if (humanScore < computerScore) {
        pointsTracker.textContent = `You lose ${computerScore}/${humanScore}, game over!`;
    } else {
        pointsTracker.textContent = `It's a tie! ${computerScore}/${humanScore}`;
    }

    // reset score and announce winner after 5 points

    if (humanScore === 5) {
        pointsTracker.textContent = `That's it, you won!`
        humanScore = 0;
        computerScore = 0;
        result.textContent = ``;
    } else if (computerScore === 5) {
        pointsTracker.textContent = `Game over, you lose.`
        humanScore = 0;
        computerScore = 0;
        result.textContent = ``;
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

// create and add divs for results

const result = document.createElement("div");

container.appendChild(result);

const pointsTracker = document.createElement("div");

container.appendChild(pointsTracker);

// click event listener for buttons

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let playerSelection = e.target.id;
        playGame(playerSelection);
    });
});


