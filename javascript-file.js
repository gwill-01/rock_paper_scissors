/* computerPlay function */

let computerArray = ['rock', 'paper', 'scissors']

function computerPlay() {
    return computerArray[Math.floor(Math.random()*computerArray.length)];
} 

/* rock paper scissors single round function */

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You Win";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You Lose";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You Win";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You Lose";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You Win";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You Lose";
    } else if (playerSelection == computerSelection) {
        return "Its a wash";
    } else {
        return "Do you not know the rules?";
    }
}
/* player enters case INsensitive selection */

const playerSelection = 'paper';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
    
/* runs player selection vs computer function */
    /* returns text of round winner */

/* game function keeps track of 5 rounds */
