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
        return "You lose this round";
    } else if (playerSelection.toLowerCase() == computerSelection) {
        return "This round is a wash";
    } else {
        return "Do you not know the rules?";
    }
}

const computerSelection = computerPlay();


/* game function plays 5 rounds */

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = (prompt("rock, paper, or scissors?"));
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

/* tallies total of "you wins" vs "you lost" */