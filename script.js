const buttons = document.querySelectorAll(".game-buttons");
const winner = document.querySelector("#winner");
const playerScore = document.getElementById("player-score");
const ComputerScore = document.getElementById("computer-score");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.textContent;
        winner.textContent = playRound(playerChoice, getComputerChoice());
        displayScoreline();
        declareWinner()
    })
})

let playerWins = 0;
let computerWins = 0; 
let result = null;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        result =  "You lose! paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result =  "You win! paper beats rock"
    } else if (playerSelection ==="rock" && computerSelection === "scissors") {
        result =  "You win! rock beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result =  "You lose! rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result =  "You lose! scissors beats paper"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result =  "You win! paper beats scissors"
    } else {
        result =  "It's a draw"
    }
    return result
    
}

function displayScoreline() {
        switch (true) {
            case result.indexOf("You win") !== -1:
                playerWins++;
                playerScore.textContent = `YourScore: ${playerWins}`;
                break;
            case result.indexOf("You lose") !== -1:
                computerWins++;
                ComputerScore.textContent = `computerScore: ${computerWins}`;
                break;
        }
}

function declareWinner() {
    const winningScore = 5;
    const scoreValues = [playerWins, computerWins];
    for (let i = 0; i < scoreValues.length; i++) {
        if (scoreValues[0] === winningScore) {
            winner.textContent = "YOU WIN!";
        } else if (scoreValues[1] === winningScore) {
            winner.textContent = "YOU LOSE!";
        }
    }
}
