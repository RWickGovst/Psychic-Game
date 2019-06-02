var letter='s';
var wins=0;
var losses=0;
// var guessesLeft;
// var guessesMade;

var myLetter = prompt("Try to guess my secret letter: ");
var myLet = name(myLetter);
{/* <input type="text" onkeydown="myFunction()"></input> */}
if(myLet === letter){

  alert("Great guess");
  wins++;
}
else{
  alert("Not Quite!");
  losses++;
  // guesses left
  // guesses made
}
