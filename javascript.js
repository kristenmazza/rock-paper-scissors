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

// new code below

const choices = document.querySelectorAll(".choices");
const playerImage = document.getElementById("playerImage");
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const value = choice.getAttribute("value");
        playerImage.src = "images/"+value+".png";
    }
    )
})


// old code below

// let playerSelection;
// const rock = document.getElementById('rock');

// rock.addEventListener('click', () => {
//     playerSelection = "rock";
//     getComputerChoice();
//     playRound();
//     console.log(playerSelection);
// });



// game();


// 1. Remove logic that plays exactly 5 rounds. 
//    Instead, first to 5 points.
// 2. Create three buttons, one for each selection. 
//    Add an event listener to the buttons that calls 
//    the playRound function with the correct playerSelection
//    every time a button is clicked (can keep console.log for this step)
// 3. Add a div for displaying the results and change all of the console.logs into DOM methods
// 4. Display the running score, and announce a winner of the game
//    once player reaches 5 points.