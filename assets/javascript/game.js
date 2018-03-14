// number of hangman options 
var nflTeamNames = ["cardinals", "falcons", "ravens", "bills", "panthers", "bears", "bengals", "browns", 
"cowboys", "broncos", "lions", "packers", "texans", "colts", "jaguars", "chiefs", "chargers", "rams",
"dolphins", "vikings", "patriots", "saints", "giants", "jets", "raiders", "eagles", "steelers", "49ers", 
"buccaneers", "titans", "redskins"];
var correctLetters = [];
var alreadyUsedLetters = [];
var wrongGuesses = [];
var numberOfGuesses = 8;
var letterLocation;
//random team selection
var randomTeamName = nflTeamNames[Math.floor(Math.random() * nflTeamNames.length)];

// for finding multiple letters in a given word
function pushAllIndexes(arr, val) {
    // var indexes = [], i;
    for(i = 0; i < arr.length; i++){
        if (arr[i] === val){
            correctLetters[i] = val;
            // return indexes;
        }
    }
}

console.log(randomTeamName);
document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    //Remember to remember numbers i.e. 49ers
    // makes sure key is in choices and hasn't been chosen already
    if(randomTeamName.includes(userGuess) && !correctLetters.includes(userGuess)){
        // insert userGuess.indexof method here
        pushAllIndexes(randomTeamName, userGuess)
        // letterLocation = randomTeamName.indexOf(userGuess);
        // correctLetters[letterLocation] = userGuess;
        alreadyUsedLetters.push(userGuess);
        document.querySelector("#team-name").innerHTML = "<strong>Word to Guess: <strong>" + correctLetters;
    }
    else if(!randomTeamName.includes(userGuess) && !alreadyUsedLetters.includes(userGuess)){
        alreadyUsedletters.push(userGuess);
        wrongGuesses.push(userGuess);
        document.querySelector("#wrong-guesses").innerHTML = "Wrong Guesses: " + wrongGuesses;
        numberOfGuesses--;
        document.querySelector("#remaining-guesses").innerHTML = "Remaining Guesses: " + numberOfGuesses;
    }
}
        