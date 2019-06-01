var letter='s';

var myLetter = prompt("Try to guess my secret letter: ");
var myLet = Letter(myLetter);

if(myLet === letter){

  alert("Great guess");
}
else{
  alert("Not Quite!");
}
