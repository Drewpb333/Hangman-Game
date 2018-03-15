// number of hangman options 
var nflTeamNames = ["49ers", "bears", "bengals", "bills", "broncos", "browns", "buccaneers",
"cardinals", "chargers", "chiefs", "colts", "cowboys", "dolphins", "eagles", "falcons", 
"giants", "jaguars", "jets", "lions", "packers", "panthers", "patriots", "raiders", "rams",
"ravens", "redskins", "saints", "seahawks", "steelers", "texans", "titans", "vikings"]
var correctLetters = [];
var alreadyUsedLetters = [];
var wrongGuesses = [];
var numberOfGuesses = 8;
var letterLocation;
//random team selection
var randomTeamName = nflTeamNames[Math.floor(Math.random() * nflTeamNames.length)];
var numberOfLetters = 0;

// for finding multiple letters in a given word
function letterIndexAssign(arr, val) {
    // var indexes = [], i;
    for(i = 0; i < arr.length; i++){
        if (arr[i] === val){
            correctLetters[i] = val;
            numberOfLetters++; //numberOfLetters is written here because of mulitple
            // instances of one letter
        }
        // else {
        //     correctLetters[i] = " ";
        // }
    }
}

// function displayCorrectLetters(){
//     for(var i = 0; i < correctLetters.length; i++){
//         var currentLetters = currentLetters + correctLetters[i];
//     }
//     document.getElementById("correct-letters").innerHTML = currentLetters;
// }

// function displayIncorrectLetters(){
//     for (var i = 0; i < wrongGuesses.length; i++){
//         var wrongLetters = wrongLetters + wrongGuesses[i] + " ";     
//     }
//     document.getElementById("wrong-guesses").innerHTML = wrongLetters;
// }

console.log(randomTeamName); //delete when program is finished
    // create dash lines for number of letters

document.getElementById("correct-letters").innerHTML = 

randomTeamName.foreach(){
    
}

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    //Remember to remember numbers i.e. 49ers
    // makes sure key is in choices and hasn't been chosen already
    // letterIndexAssign(randomTeamName, userGuess);
    if(randomTeamName.includes(userGuess) && !correctLetters.includes(userGuess)){
        // insert userGuess.indexof method here
        letterIndexAssign(randomTeamName, userGuess);
        // letterLocation = randomTeamName.indexOf(userGuess);
        // correctLetters[letterLocation] = userGuess;
        alreadyUsedLetters.push(userGuess);
        // document.querySelector("#team-name").innerHTML = "<strong>Word to Guess: <strong>" + correctLetters;
        // displayCorrectLetters();
        document.querySelector("#correct-letters").innerHTML = correctLetters.join("");
        if(numberOfLetters === randomTeamName.length){
            document.querySelector("#result").innerHTML = "Congratulations, you won!";
        }
    }
    else if(!randomTeamName.includes(userGuess) && !alreadyUsedLetters.includes(userGuess)){
        alreadyUsedLetters.push(userGuess);
        wrongGuesses.push(userGuess);
        document.querySelector("#wrong-guesses").innerHTML = wrongGuesses.join(" ");
        numberOfGuesses--;
        document.querySelector("#remaining-guesses").innerHTML = numberOfGuesses;
        if(numberOfGuesses === 0){
            document.querySelector("#result").innerHTML = "Sorry, you lost. Better luck next time!";
        }
    }
}

//end of game conditionals


        