let choices = ["scissors", "paper", "stone"]
let playerWins = 0;
let computerWins = 0;

let computerGeneratedChoice = function(arrayOfChoices) {
  let randomIndex = Math.floor(Math.random() * arrayOfChoices.length)
  return arrayOfChoices[randomIndex]
}

const compareChoices = function(playerChoice,userName) {
  let computerChoice = computerGeneratedChoice(choices)
  if (playerChoice === computerChoice) {
    return `It was a draw! The computer chose ${computerChoice} and ${userName} chose ${playerChoice}.`
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'stone') {
      computerWins++
      return `The computer wins! The computer chose ${computerChoice} and ${userName} chose ${playerChoice}.`
    } else {
      playerWins++
      return `${userName} wins! The computer chose ${computerChoice} and ${userName} chose ${playerChoice}.`
    }
  } else if (playerChoice === 'stone') {
    if (computerChoice === 'paper') {
      computerWins++
      // computerWins = computerWins + 1;
      return `The computer wins! The computer chose ${computerChoice} and ${userName} chose ${playerChoice}.`
    } else {
      playerWins++
      return `${userName} wins! The computer chose ${computerChoice} and ${userName} chose ${playerChoice}.`
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerWins++
      return `The computer wins! The computer chose ${computerChoice} and ${userName} chose ${playerChoice}.`
    } else {
      playerWins++
      return `${userName} wins! The computer chose ${computerChoice} and ${userName} chose ${playerChoice}.`
    }
}
}

const winsRecord = function (userName) {
  return (`${userName} wins: ${playerWins} (${Math.round(playerWins/(computerWins+playerWins)*100)}%), <br> Computer wins: ${computerWins} (${Math.round(computerWins/(computerWins+playerWins)*100)}%)`)
}

const main = function (input,userName) {
  let playerChoice = input;
  return (compareChoices(playerChoice,userName));

};

console.log(winsRecord())
/*
// function compareChoices(){
//   computerChoice();
//   if (player.currentChoice === computer.currentChoice){
//     displayResult("It was a draw! The computer chose "  + computer.currentChoice + " and the player chose " + player.currentChoice + ".");
//   }else if(computer.currentChoice === choices[0]){
//     if(player.currentChoice === choices[1]){
//       displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//     }else{
//       displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//     }
//   }else if(computer.currentChoice === choices[1]){
//     if(player.currentChoice === choices[2]){
//       displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//     }else{
//       displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//     }
//   }else if(computer.currentChoice === choices[2]){
//     if(player.currentChoice === choices[0]){
//       displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//     }else{
//       displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
//     }
//   }
// }


// if (currentGameMode == 'waiting for user name') {
  //   // set the name
  //   userName = input;

  //   // now that we have the name, switch the mode
  //   currentGameMode = 'dice game';

  //   myOutputValue = 'Hello ' + userName;
  // } else if (currentGameMode == 'dice game') {
  //   myOutputValue = playDiceGame(userName, input);
  // }


// var playDiceGame = function (userName, userGuess) {
//   var message = '';

//   // dice game logic
//   var randomDiceRoll = rollDice();
//   message =
//     userName +
//     ' you lost! you guessed: ' +
//     userGuess +
//     'you rolled: ' +
//     randomDiceRoll +
//     ' current bank roll: ' +
//     bankRoll;

//   if (userGuess == randomDiceRoll) {
//     bankRoll = bankRoll + 1;
//     message =
//       userName +
//       ' you won! you guessed: ' +
//       userGuess +
//       'you rolled: ' +
//       randomDiceRoll +
//       ' your current bank roll: ' +
//       bankRoll;
//   }

//   return message;
// };

*/