// defining variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersGuessed = [];

// writing variables to website
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed;

// define alphabet array and selecting a random letter
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var computerLetter = alphabet[Math.floor(Math.random() * 26)];

console.log("computerLetter: " + computerLetter);

// function runs everytime a key is pressed
document.onkeypress = function (guess) {
    
    // storing the key pressed in a variable
    var selectedLetter = guess.key;

    // checking stored variables
    console.log("computerLetter: " + computerLetter);
    console.log("selectedLetter: " + selectedLetter);
    console.log("***");

    // what happens when user guesses the computer letter
    if (selectedLetter === computerLetter) {
        console.log("hello im inside of wins");
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        guessesRemaining = 10;
        document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
        lettersGuessed = [];
        document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + lettersGuessed;
        computerLetter = alphabet[Math.floor(Math.random() * 26)];
        console.log(computerLetter);
    }

    // what happens when the user does not guess the computer letter
    else if (selectedLetter !== computerLetter) {
        guessesRemaining--;
        document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
        lettersGuessed.push(selectedLetter);
        document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed;
    }

    // what happens when the users guesses equal 0
    if (guessesRemaining === 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        guessesRemaining = 10;
        document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
        lettersGuessed = [];
        document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + lettersGuessed;
        computerLetter = alphabet[Math.floor(Math.random() * 26)];
        console.log(computerLetter);
    }

}
