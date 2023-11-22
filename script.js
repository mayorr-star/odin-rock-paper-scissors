/*
Declare a function called getComputerChoice that will randomly select rock, paper or scissors as the computer's choice
*/
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}


function getPlayerChoice() {
    const playerChoice = prompt("Please enter your choice").toLowerCase();
    return playerChoice;
}

let playerScore = 0;
let computerScore = 0; 
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
        result =  "You lose! paper beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result =  "You win! scissors beats paper"
    } else {
        result =  "It's a draw"
    }
    return result
    
}

function game() {
    let index = 0;
    while (index < 5) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()))
        index++;
        switch (true) {
            case result.indexOf("You win") !== -1:
                playerScore++;
                console.log(`playerScore: ${playerScore}`);
                break;
            case result.indexOf("You lose") !== -1:
                computerScore++;
                console.log(`computerScore: ${computerScore}`)
                break;
        }
    }
    console.log(playerScore > computerScore ? "You win!" : "You lose!");
}
game()