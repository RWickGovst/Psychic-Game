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
var guessesMade = 0;

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
elGuessesMade.textContent= guessesMade;

var userGuess = prompt("Try to guess my secret letter: ");

document.onkeydown = function(event){
var userGuess = event.key;
console.log(guessesMade);
let guessesMade = userGuess;

if(guessesMade === letter){

  alert("Great guess");
  // update score
  wins++;
  
}
else{
  alert("Not Quite!");
  // update score
  losses++;
  // guesses left
  guessesLeft--;
}

}
