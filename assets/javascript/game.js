var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessesSoFar = [];

var userGuess = null;

var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

console.log("Wins: " + wins + " Losses: " + losses + " Guesses left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
        guessesLeft--;
    }

    if (letterToBeGuessed == userGuess) {
        wins++;
        console.log("You won!");
        document.getElementById("wins").innerHTML = wins;
        guessesLeft = 9;
        guessesSoFar = [];
        letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " Guesses left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }

    if (guessesLeft == 0) {
        losses++;
        console.log("You lost!");
        document.getElementById("losses").innerHTML = losses;
        guessesLeft = 9;
        guessesSoFar = [];
        letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " Guesses left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }

    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar;

    // Wins has id of "wins"
    // Losses has id of "losses"
    // Guesses left has id of "guessesLeft"
    // Guesses so far has id of "guessesSoFar"



}
