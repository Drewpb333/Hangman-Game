var nflTeamNames=["49ers", "bears", "bengals", "bills", "broncos", "browns", "buccaneers",
    "cardinals", "chargers", "chiefs", "colts", "cowboys", "dolphins", "eagles", "falcons", 
    "giants", "jaguars", "jets", "lions", "packers", "panthers", "patriots", "raiders", "rams",
    "ravens", "redskins", "saints", "seahawks", "steelers", "texans", "titans", "vikings"];
var correctLetters= [];
var alreadyUsedLetters = [];
var wrongGuesses = [];
var numberOfGuesses = 8;
var numberOfLetters = 0;
// random team selection
var randomTeamName = nflTeamNames[Math.floor(Math.random() * nflTeamNames.length)];

function letterIndexAssign(arr, val) {
    for(i = 0; i < arr.length; i++){
        if (arr[i] === val){
            correctLetters[i] = val;
            numberOfLetters++; 
        }
    };
}

for(var i=0; i < randomTeamName.length; i++){
    correctLetters[i] = "_ ";
};

function resetGame(){
    var correctLetters= [];
    var alreadyUsedLetters = [];
    var wrongGuesses = [];
    
    var numberOfGuesses = 8;
    document.querySelector("#remaining-guesses").innerHTML = numberOfGuesses;
    var numberOfLetters = 0;
    // random team selection
    var randomTeamName = nflTeamNames[Math.floor(Math.random() * nflTeamNames.length)];
    console.log(randomTeamName);
}

console.log(randomTeamName); //delete when program is finished

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    //Remember to remember numbers i.e. 49ers
    // makes sure key is in choices and hasn't been chosen already
    // letterIndexAssign(randomTeamName, userGuess);
    document.querySelector("#correct-letters").innerHtml = correctLetters.join("");
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
            $("#result").innerHTML = "Congratulations, you won!";
             $("#hangman-image").html("<div class='thumbnail'><img src='assets/images/" + randomTeamName + ".jpg' \
             alt='Team Logo'></div>");
            resetGame();
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
            resetGame();
        }
    }
}

//end of game conditionals


    