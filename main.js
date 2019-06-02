var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
let heading = 'Psychic Game';
// var guessesLeft;
var guessesLeft = 9;
// var guessesMade;
var guessesMade = '';

var el = document.getElementById('game');
el.textContent = heading;

var elWins = document.getElementById('wins');
elWins.textContent = wins;

var elLosses = document.getElementById('losses');
elLosses.textContent = losses;

var elGuessesLeft = document.getElementById('guessesLeft');
elGuessesLeft.textContent = guessesLeft;

var elGuessesMade = document.getElementById('guessed');
elGuessesMade.textContent = guessesMade;

var computerGuess = letter[Math.floor(Math.random() * letter.length)];
  console.log(computerGuess);

document.onkeyup = function (event) {
  var userGuess = event.key;
  
  console.log('user guessed: ' + userGuess);

  guessesMade += userGuess + ', ';

  if (guessesLeft === 0 && !(userGuess === computerGuess)) {
    losses++;
    // guessesLeft--;
    elLosses.textContent = losses;
    return alert('Game over!');
  }

  else if (guessesLeft > 0 && (userGuess === computerGuess)) {
    // update score
    wins++;
    elWins.textContent = wins;
    console.log('Win happened');
    alert("Great guess");
    // break?
    }
  else {
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
