// Global Variables
let numRounds;
let playerScore = 0;
let computerScore = 0;

  // Init game
  const initGame = () => {

    const startGame = confirm("Shall we play rock, paper, scissors?");
    startGame ? game(numRounds) : alert("Ok, maybe next time.");

  }

  // Computer and player rematch scenarios
  const userRematch = () => {

    const rematch = confirm("Computer won. Do you want a rematch?");
    rematch ? game(numRounds) : alert("Ok, see you soon.");

  }
  const computerRematch = () => {

    const rematch = confirm("You won. Computer requests a rematch!");
    rematch ? game(numRounds) : alert("Computer resigned peacefully.");

  }

  const decidingMatch = () => {

    const rematch = confirm("It's a tie! Do you want to settle this with another game?");
    rematch ? game(numRounds) : alert("Everyone is happy.");

  }

  // Computer autogenerated choice
  function computerPlay() {

      const options = ["Rock", "Paper", "Scissors"];
      const randomIndex = Math.floor(Math.random() * options.length);
      return options[randomIndex];

    }

  // Capitalize first letter function
  function capitalize(userInput) {

    return userInput.charAt(0).toUpperCase() + userInput.slice(1);

  }

  // The three possible autocomes of the user's choice
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

  // Select rounds function
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

   // Plays selected rounds depending on the choice of the user, i.e. 5 rounds = 5 iterations. Also displays result of each round.
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
  
  // Play a round. Accepts user input and challenges the computer
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

  // Display round results
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

 
  // Main function, select round, play selected round (+ display round results) and display the final result.
  function game() {

    selectRounds();
    playSelectedRounds();
  
    if (playerScore > computerScore) {
      console.log(`You won the game! (${playerScore} - ${computerScore})`);
      playerScore = 0;
      computerScore = 0;
      computerRematch();
    } else if (computerScore > playerScore) {
      console.log(`You lost the game. (${playerScore} - ${computerScore})`);
      playerScore = 0;
      computerScore = 0;
      userRematch();
    } else if (!computerScore && !playerScore) {
      console.log("No one wins!");
    } else {
      console.log(`It's a tie game. (${playerScore} - ${computerScore})`);
      playerScore = 0;
      computerScore = 0;
      decidingMatch();
    }

  }
  
  initGame();
