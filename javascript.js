function getComputerChoice() {
    generatedNumber = Math.floor((Math.random()*30)+1);
    if (generatedNumber <= 10) {
        generatedChoice = "rock";
    } else if (generatedNumber <=20) {
        generatedChoice = "paper";
    } else {
        generatedChoice = "scissors";
    }
    return generatedChoice;
}

function getPlayerChoice() {
    playerChoice = prompt("Choose rock, paper, or scissors", "");
    playerChoice = playerChoice.toLowerCase();
    while ((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
        playerChoice = prompt(`"${playerChoice}" is not valid. Please pick rock, paper, or scissors.`)
        return playerChoice;
    }
    return playerChoice;
}


function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);
    console.log(computerSelection);
    
    if (playerSelection === "rock") {
        if (computerSelection === "paper") { 
            console.log("You lose. Paper beats rock.");
        } else if (computerSelection === "scissors") {
            console.log("You win. Rock beats scissors.");
        } else { 
            console.log("It's a tie!");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") { 
            console.log("You win. Paper beats rock.");
        } else if (computerSelection === "scissors") {
            console.log("You lose. Scissors beats paper.");
        } else { 
            console.log("It's a tie!");
        }
    } else { 
        if (computerSelection === "rock") { 
            console.log("You lose. Rock beats scissors.");
        } else if (computerSelection === "paper") {
            console.log("You win. Scissors beats paper.");
        } else { 
            console.log("It's a tie!");
        }
    }

  }
   


  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();
  console.log(playRound(playerSelection, computerSelection));