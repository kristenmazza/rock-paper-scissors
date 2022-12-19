let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const generatedNumber = Math.floor((Math.random()*3)+1);
    if (generatedNumber === 1) {
        generatedChoice = "rock";
    } else if (generatedNumber === 2) {
        generatedChoice = "paper";
    } else {
        generatedChoice = "scissors";
    }
    return generatedChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors", "");
    playerChoice = playerChoice.toLowerCase();
    while ((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
        playerChoice = prompt(`"${playerChoice}" is not valid. Please pick rock, paper, or scissors.`)
        playerChoice = playerChoice.toLowerCase();
    }
    return playerChoice;
}

function playRound(computerSelection, playerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "paper") { 
            computerScore++;
            return "You lose. Paper beats rock.";
        } else if (computerSelection === "scissors") {
            playerScore++;
            return "You win. Rock beats scissors.";
        } else { 
            return "It's a tie! You both selected rock.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") { 
            playerScore++;
            return "You win. Paper beats rock.";
        } else if (computerSelection === "scissors") {
            computerScore++;
            return "You lose. Scissors beats paper.";
        } else { 
            return "It's a tie! You both selected paper.";
        }
    } else { 
        if (computerSelection === "rock") { 
            computerScore++;
            return "You lose. Rock beats scissors.";
        } else if (computerSelection === "paper") {
            playerScore++;
            return "You win. Scissors beats paper.";
        } else { 
            return "It's a tie! You both selected scissors.";
        }
    }
  }


function game() {

    for (let round = 0; round < 5; round++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        const roundResult = playRound(computerSelection, playerSelection);
        console.log(roundResult);
    }

    if (computerScore > playerScore) {
        console.log(`You lose. Your score is: ${playerScore}. Computer\'s score is: ${computerScore}.`);
    } else if (playerScore > computerScore) {
        console.log(`You win. Your score is: ${playerScore}. Computer\'s score is: ${computerScore}.`);
    } else {
        console.log(`It's a tie. Your score is: ${playerScore}. Computer\'s score is: ${computerScore}.`);
    }

}

game();
