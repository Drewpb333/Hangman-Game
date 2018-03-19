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
var initializeGame = true;

function letterIndexAssign(arr, val) {
    for(i = 0; i < arr.length; i++){
        if (arr[i] === val){
            correctLetters[i] = val;
            numberOfLetters++; 
        }
    }
};

function blankSpaces(){
    for(var i=0; i < randomTeamName.length; i++){
    correctLetters[i] = "_ ";
    };
    $("#correct-letters").html(correctLetters.join(""));
};

function resetGame(){
    correctLetters= [];
    alreadyUsedLetters = [];
    wrongGuesses = [];
    $("#wrong-guesses").empty();
    numberOfGuesses = 8;
    $("#remaining-guesses").html(numberOfGuesses);
    numberOfLetters = 0;
    randomTeamName = nflTeamNames[Math.floor(Math.random() * nflTeamNames.length)];
    blankSpaces();
    initializeGame = true;
}


blankSpaces();
if(initializeGame){
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        $("#correct-letters").html(correctLetters.join(""));
        // If guess is correct
        if(randomTeamName.includes(userGuess) && !correctLetters.includes(userGuess)){
            letterIndexAssign(randomTeamName, userGuess);
            alreadyUsedLetters.push(userGuess);
            $("#correct-letters").html(correctLetters.join(""));
            // user wins
            if(numberOfLetters === randomTeamName.length){
                $("#result").html("Congratulations, you won!");
                setTimeout(function(){
                    $("#result").empty();
                }, 4000);
                $("#hangman-image").html("<div class='thumbnail'><img src='assets/images/" + randomTeamName + ".jpg' \
                alt='Team Logo'></div>" + correctLetters.join(""));
                resetGame();
            }
        }
        //if guess is not correct
        else if(!randomTeamName.includes(userGuess) && !alreadyUsedLetters.includes(userGuess)){
            alreadyUsedLetters.push(userGuess);
            wrongGuesses.push(userGuess);
            $("#wrong-guesses").html(wrongGuesses.join(" "));
            numberOfGuesses--;
            $("#remaining-guesses").html(numberOfGuesses);
            // user loses
            if(numberOfGuesses <= 0){
                $("#result").html("Sorry, you lost. Better luck next time!");
                setTimeout(function(){
                    $("#result").empty();
                }, 4000);
                resetGame();
            }
        }
    }
}



    