var letter='s';
var wins=0;
var losses=0;
let heading = 'Psychic Game';
// let question = "Guess what letter i'm thinking of: ";
// var guessesLeft;
var guessesLeft = 9;
// var guessesMade;
var guessesMade = '';

var el = document.getElementById('game');
  el.textContent=heading;
  
  // var elQuestion = document.getElementById('title');
  // elQuestion.textContent=question;
  
  var elWins = document.getElementById('wins');
  elWins.textContent= wins;
  
  var elLosses = document.getElementById('losses');
  elLosses.textContent= losses;
  
  var elGuessesLeft = document.getElementById('remaining');
  elLosses.textContent= guessesLeft;
  
  var elGuessesMade = document.getElementById('guessed');
  elGuessesMade.textContent= guessesMade;

document.onkeyup = function(event){
var userGuess = event.key;

console.log('user guessed: ' + userGuess);

guessesMade += userGuess + ', ';

if(guessesLeft === 0 && !(userGuess === letter)){
losses++;
// guessesLeft--;
elLosses.textContent = losses;
return alert('Game over!');
}

else if(guessesLeft > 0 && (userGuess === letter)){
  // update score
  elWins.textContent = wins;
  console.log('Win happened');
  alert("Great guess");
  wins++;
}
else{
  // alert("Not Quite!");
  // update score
  guessesMade += userGuess + ', ';
  elGuessesMade.textContent = guessesMade;
  console.log('guesses made: ' + guessesMade);
  
  // guesses left
  guessesLeft--;
  elGuessesLeft.textContent = guessesLeft;
  console.log('guesses left: ' + guessesLeft);
}

}
