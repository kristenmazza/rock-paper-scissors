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

function endGame() {
    const popup = document.querySelector('#popup');
    const finalResult = document.querySelector('#finalResult')
    if (playerScore === 5){
        finalResult.innerText = `You won the game! \n Your score: ${playerScore}. \n Computer score: ${computerScore}`;;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("popup").style.visibility="visible";

    } else if (computerScore === 5){
        finalResult.innerText = `You lost the game! \n Your score: ${playerScore}. \n Computer score: ${computerScore}`;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("popup").style.visibility="visible";
    } 
}

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

        // Update scoreboard
        const playerNumber = document.querySelector('#playerNumber');
        playerNumber.innerText = playerScore;

        const computerNumber = document.querySelector('#computerNumber');
        computerNumber.innerText = computerScore;

        // Display winner of round
        const results = document.querySelector('#results')
        results.innerText = roundResult;

        endGame();
    }
    )
})

function togglePopup() {
    document.getElementById("popup").style.visibility="hidden";
    resetGame();
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    const playerNumber = document.querySelector('#playerNumber');
    playerNumber.innerText = playerScore;

    const computerNumber = document.querySelector('#computerNumber');
    computerNumber.innerText = computerScore;

    results.innerText = "FIRST TO 5 WINS";

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}
