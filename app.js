let numRounds;
let playerScore = 0;
let computerScore = 0;


  function computerPlay() {
      const options = ["Rock", "Paper", "Scissors"];
      const randomIndex = Math.floor(Math.random() * options.length);
      return options[randomIndex];
    }

  function capitalize(userInput) {
    return userInput.charAt(0).toUpperCase() + userInput.slice(1);
  }

  function computerScissors(playerSelection, computerSelection, computerScore, playerScore) {
    if (computerSelection?.toLowerCase() === "scissors") {
      playerScore++;
      return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}. (Score: ${playerScore}-${computerScore})`;
    } else if (computerSelection?.toLowerCase() === "paper") {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}. (Score: ${playerScore}-${computerScore})`;
    } else {
      return  `It's a tie! (Score: ${playerScore}-${computerScore}) `;
    }    
  }

  function computerRock(playerSelection, computerSelection, computerScore, playerScore) {
    if (computerSelection?.toLowerCase() === "rock") {
      playerScore++;
      return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}. (Score: ${playerScore}-${computerScore})`;
    } else if (computerSelection?.toLowerCase() === "scissors") {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}. (Score: ${playerScore}-${computerScore})`;
    } else {
      return  `It's a tie! (Score: ${playerScore}-${computerScore}) `;
    }
  }
    
  function computerPaper(playerSelection, computerSelection, computerScore, playerScore) {
    if (computerSelection?.toLowerCase() === "paper") {
      playerScore++;
      return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}. (Score: ${playerScore}-${computerScore})`;
    } else if (computerSelection?.toLowerCase() === "rock") {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}. (Score: ${playerScore}-${computerScore})`;
    } else {
      return  `It's a tie! (Score: ${playerScore}-${computerScore}) `;
    }
  }
  
  function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    playerSelection = playerSelection?.toLowerCase();
    switch (playerSelection) {
      case "rock":
        return computerScissors(playerSelection, computerSelection, computerScore, playerScore);
      case "paper":
        return computerRock(playerSelection, computerSelection, computerScore, playerScore);
      case "scissors":
        return computerPaper(playerSelection, computerSelection, computerScore, playerScore);
      default:
        return "Invalid selection. Please choose rock, paper, or scissors.";
    }
  }
  
  function selectRounds() {
    while (true) {
      let input = prompt("How many rounds do you want to play?");
      
      if (input === null) {
        console.log("Game canceled.");
        break;
      }
      let parsedInput = parseInt(input.trim());
    
      if (isNaN(parsedInput) || parsedInput <= 0) {
        console.log("Please enter a valid positive number.");
      } else {
        numRounds = parsedInput;
        console.log(`Paper➡️Rock⬇️ \n ⬆️Scissors⬅️`);
        break;
      }
    }
  }

  function displayRoundResult(playerSelection, computerSelection, i) {
    const result = playRound(playerSelection, computerSelection, playerScore, computerScore);
    console.log(result);

    if (result.startsWith("You Win!")) {
      playerScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    }
    console.log(`Score: ${playerScore}-${computerScore}`);
  }

  function playSelectedRounds() {

    for (let i = 1; i <= numRounds; i++) {
      let playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);
      const computerSelection = computerPlay();
      if (playerSelection == null) {
        console.log("Game cancelled"); 
        break;
      } else {
        while (!["rock", "paper", "scissors"].includes(playerSelection?.toLowerCase())) {
          playerSelection = prompt(`Invalid selection. Please choose Rock, Paper, or Scissors`);
        }
      }
      displayRoundResult(playerSelection, computerSelection, i);
    }
  }

  function game() {

    selectRounds();
    playSelectedRounds();
  
    if (playerScore > computerScore) {
      console.log(`You won the game! (${playerScore} - ${computerScore})`);
    } else if (computerScore > playerScore) {
      console.log(`You lost the game. (${playerScore} - ${computerScore})`);
    } else if (!computerScore && !playerScore) {
      return;
    } else {
      console.log(`It's a tie game. (${playerScore} - ${computerScore})`);
    }
  }
  
  game(numRounds);