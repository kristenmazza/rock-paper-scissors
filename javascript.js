let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const generatedNumber = Math.floor((Math.random()*3)+1);
    if (generatedNumber === 1) {
        generatedChoice = "rock";
        computerImage.src = "images/rock.png";
    } else if (generatedNumber === 2) {
        generatedChoice = "paper";
        computerImage.src = "images/paper.png";
    } else {
        generatedChoice = "scissors";
        computerImage.src = "images/scissors.png";
    }
    return generatedChoice;
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
    //    const computerSelection = getComputerChoice();
    //    const playerSelection = playerClick();
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

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Change main player image to the selected choice (rock, paper, or scissors)
        const value = choice.getAttribute("value");
        playerImage.src = "images/"+value+".png";


        let playerSelection;
        const computerSelection = getComputerChoice();

        // Assign rock, paper, or scissors to playerSelection based on click input
        if (value === "rock") {
            playerSelection = "rock";
        } else if (value === "paper") {
            playerSelection = "paper";
        } else {
            playerSelection = "scissors";
        }
        
        // Determine winner of round
        roundResult = playRound(computerSelection, playerSelection);
        console.log(roundResult);

        const playerNumber = document.querySelector('#playerNumber');
        playerNumber.innerText = playerScore;

        const computerNumber = document.querySelector('#computerNumber');
        computerNumber.innerText = computerScore;

        const results = document.querySelector('#results')
        results.innerText = roundResult;
    }
    )
})



// game();


// // Return the value of the button choice clicked
// const playerClick = function(event) {
//     const value = event.currentTarget.getAttribute("value"); 
// //     console.log(value);
// //     return value;
//     playRound(value);
// }

// Add event listeners to each button for rock, paper, and scissors
// const rockChoice = document.querySelector('.rock');
// rockChoice.addEventListener('click', playerClick);

// const paperChoice = document.querySelector('.paper');
// paperChoice.addEventListener('click', playerClick);

// const scissorsChoice = document.querySelector('.scissors');
// scissorsChoice.addEventListener('click', playerClick);




// 1. Remove logic that plays exactly 5 rounds. 
//    Instead, first to 5 points.
// 2. Create three buttons, one for each selection. 
//    Add an event listener to the buttons that calls 
//    the playRound function with the correct playerSelection
//    every time a button is clicked (can keep console.log for this step)
// 3. Add a div for displaying the results and change all of the console.logs into DOM methods
// 4. Display the running score, and announce a winner of the game
//    once player reaches 5 points.