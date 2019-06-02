var letter='s';
var wins=0;
var losses=0;
let heading = 'Psychic Game';
let question = "Guess what letter i'm thinking of: ";
var wins = 0;
var losses = 0;
// var guessesLeft;
var guessesLeft = 9;
// var guessesMade;
var guessesMade = '';

var el = document.getElementById('game');
  el.textContent=heading;
  
  var elQuestion = document.getElementById('title');
  elQuestion.textContent=question;
  
  var elWins = document.getElementById('wins');
  elWins.textContent="Wins: " + wins;
  
  var elLosses = document.getElementById('losses');
  elLosses.textContent="Losses: " + losses;
  
  var elGuessesLeft = document.getElementById('remaining');
  elLosses.textContent="Guesses left: " + guessesLeft;
  
  var elGuessesMade = document.getElementById('guessed');
  elGuessesMade.textContent= guessesMade.appendChild;

do{
var userGuess = prompt("Try to guess my secret letter: ");

document.onkeydown = function(event){
var userGuess = event.key;

var guessesMade = userGuess;
console.log(guessesMade);
if(guessesMade == letter){

  alert("Great guess");
  // update score
  wins++;
  break;
}
else{
  alert("Not Quite!");
  // update score
  losses++;
  // guesses left
  guessesLeft--;
}

}
}while (guessesLeft != 0);