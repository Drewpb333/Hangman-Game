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
    $("correct-letters").text = correctLetters;
};

function resetGame(){
    setTimeout(function(){
        initializeGame = false;
    }, 4000);
    correctLetters= [];
    alreadyUsedLetters = [];
    wrongGuesses = [];
    $("#wrong-guesses").empty();
    numberOfGuesses = 8;
    document.querySelector("#remaining-guesses").innerHTML = numberOfGuesses;
    numberOfLetters = 0;
    // random team selection
    randomTeamName = nflTeamNames[Math.floor(Math.random() * nflTeamNames.length)];
    blankSpaces();
    initializeGame = true;
    console.log(randomTeamName);
}


console.log(randomTeamName); //delete when program is finished
blankSpaces();
console.log(correctLetters);

if(initializeGame){
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        // letterIndexAssign(randomTeamName, userGuess);
        document.querySelector("#correct-letters").innerHtml = correctLetters.join("");
        if(randomTeamName.includes(userGuess) && !correctLetters.includes(userGuess)){
            // insert userGuess.indexof method here
            letterIndexAssign(randomTeamName, userGuess);
            // letterLocation = randomTeamName.indexOf(userGuess);
            alreadyUsedLetters.push(userGuess);
            document.querySelector("#correct-letters").innerHTML = correctLetters.join("");
            if(numberOfLetters === randomTeamName.length){
                $("#result").html("Congratulations, you won!");
                $("#hangman-image").html("<div class='thumbnail'><img src='assets/images/" + randomTeamName + ".jpg' \
                alt='Team Logo'></div>" + correctLetters.join(""));
                resetGame();
                initializeGame = false;
            }
        }
        else if(!randomTeamName.includes(userGuess) && !alreadyUsedLetters.includes(userGuess)){
            alreadyUsedLetters.push(userGuess);
            wrongGuesses.push(userGuess);
            document.querySelector("#wrong-guesses").innerHTML = wrongGuesses.join(" ");
            numberOfGuesses--;
            document.querySelector("#remaining-guesses").innerHTML = numberOfGuesses;
            if(numberOfGuesses <= 0){
                document.querySelector("#result").innerHTML = "Sorry, you lost. Better luck next time!";
                resetGame();
                initializeGame = false;
            }
        }
    }
}



    