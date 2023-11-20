/*
Declare a function called getComputerChoice that will randomly select rock, paper or scissors as the computer's choice
*/

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
console.log(getComputerChoice())
function getPlayerChoice() {
    const playerChoice = prompt("Please enter your choice").toLowerCase();
    return playerChoice;
}

/* function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock"
    } else if (playerSelection ==="rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! paper beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper"
    } else {
        return "It's a draw"
    }
} */

/* 
function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        playRound(getPlayerChoice(), getComputerChoice())
    }
}
console.log(game(5)) */