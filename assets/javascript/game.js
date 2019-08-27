var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersGuessed = [];

var alphabet = "abcdefghijklmnopqrstuvwxyz"
var myLetter = alphabet[Math.floor(Math.random() * 26)];

console.log(myLetter);

document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed;