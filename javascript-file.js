/* computerPlay function */

let computerArray = ['rock', 'paper', 'scissors']

function computerPlay() {
    return computerArray[Math.floor(Math.random()*computerArray.length)];
} 

/* rock paper scissors single round function */

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return "You win this round";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return "You lose this round";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        return "You win this round";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return "You lose this round";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return "You win this round";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return "You win this round";
    } else if (playerSelection.toLowerCase() == computerSelection) {
        return "This round is a wash";
    } else {
        return "Do you not know the rules?";
    }
}

const playerSelection = 'PAPER';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
    
/* game function keeps track of 5 rounds */

function game() {
    
}

/* Allow custom player selection */