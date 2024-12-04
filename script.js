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