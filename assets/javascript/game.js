window.onload = function() {

// Array containing band objects with name, mp3File, placeholder, and 
var band = [
	{
		'name': 'OPERATION_IVY',
		'mp3File': "assets/songs/Artificial Life - OPERATION IVY.mp3",
		'placeholder': "_____________"

	},
	{
		'name': 'BLACK_FLAG',
		'mp3File': "assets/songs/Black Flag - Rise Above.mp3",
		'placeholder': "__________"
	},
	{
		'name': 'DESCENDENTS',
		'mp3File': "assets/songs/Descendents - Suburban Home.mp3",
		'placeholder': "___________"
	},
	{
		'name': 'FUGAZI',
		'mp3File': "assets/songs/Fugazi - Blueprint.mp3",
		'placeholder': "______"
	},
	{
		'name': 'MINOR_THREAT',
		'mp3File': "assets/songs/Minor Threat, Minor Threat.mp3",
		'placeholder': "____________"
	},
	{
		'name': 'MISFITS',
		'mp3File': "assets/songs/Misfits- Skulls.mp3",
		'placeholder': "_______"
	},
	{
		'name': 'OPERATION_IVY',
		'mp3File': "assets/songs/Operation Ivy - Caution.mp3",
		'placeholder': "_____________"
	},
	{
		'name': 'RAMONES',
		'mp3File': "assets/songs/Ramones - Rockaway Beach.mp3",
		'placeholder': "_______"
	},
	{
		'name': 'THE_CLASH',
		'mp3File': "assets/songs/THE CLASH-JANIE JONES.mp3",
		'placeholder': "_________"
	},
	{
		'name': 'THE_DEAD_KENNEDYS',
		'mp3File': "assets/songs/The Dead Kennedys - Holiday in Cambodia.mp3",
		'placeholder': "_________________"
	},
	{
		'name': 'THE_SEX_PISTOLS',
		'mp3File': "assets/songs/the sex pistols bodies cd version.mp3",
		'placeholder': "_______________"
	},
	{
		'name': 'YOUTH_OF_TODAY',
		'mp3File': "assets/songs/Youth of Today - One Family.mp3",
		'placeholder': "______________"
	}];

// Declaring game variables
var userGuess = "";
var userWins = 0;
var userLoses = 0;
var totalRounds = 0;
var correctGuesses = []; //POSSIBLE DELETE -- array for letters which are correct, but already guessed this round
var wrongGuesses = ""; //for displaying letters which were guessed, but are not correct for this round
var currentBandIndex = 0;
var currentBand = "";
var puzzleProgress = ""; //string to display user progress toward completed word after each guess iteration
var missesRemaining = 10;
var hangmanImageCounter = 0;
var phase = "defaultView";

readyScreen();

//switch case controlling gameflow
document.onkeyup = function(event) {
	userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	switch(phase) {

		case "defaultView":
			readyScreen();
			break;

		case "beginGame":
			gameSetUp();

		case "playing":
			nameGuessUpdate(userGuess);


		case "nextBandRound":
	}
};//closeout switchcase


//Default before game is initiated by the user or after they have quit
function readyScreen () {

		document.getElementById("userAlert").style.visibility = "visible";
		document.getElementById("userAlert").setAttribute("height", "300px");
		document.getElementById("userAlert").innerHTML = "<br><br><h2> PRESS ANY KEY TO START</h2><br><h2>YOU MAY ENTER $ AT ANY TIME TO QUIT.</h2>";
		document.getElementById("wC").innerHTML = userWins;
		document.getElementById("lC").innerHTML = userLoses;
		document.getElementById("rC").innerHTML = totalRounds;
		document.getElementById("wrongGuessBox").innerHTML = "";
		document.getElementById("missRemain").innerHTML = missesRemaining;

		phase = "beginGame";

}; //closeout readyScreen



// Game Initiation

function gameSetUp () {

//Selecting a random band from the array for this round of hangman
	currentBandIndex = Math.floor(Math.random()* band.length + 1);
	currentBand = band[currentBandIndex];
	
	document.getElementById("songDeck").setAttribute("src", currentBand.mp3File);

//default values/reset from previous round
	guessesRemaining = 10;
	wrongGuesses = "";
	document.getElementById("userAlert").style.visibility = "hidden";
	document.getElementById("userAlert").innerHTML = "";
	document.getElementById("userAlert").setAttribute("height", "0px");
	document.getElementById("wC").innerHTML = userWins;
	document.getElementById("lC").innerHTML = userLoses;
	document.getElementById("rC").innerHTML = totalRounds;
	document.getElementById("playerConsole").innerHTML = "<h2>WHAT BAND IS THIS?</h2>";
	document.getElementById("currentGuessStatus").innerHTML = currentBand.placeholder;
	document.getElementById("missRemain").innerHTML = guessesRemaining;
	document.getElementById("wrongGuessBox").innerHTML = "";
	document.getElementById("hangmanIcon").setAttribute("src", "assets/images/0.jpg")
	document.getElementById("wrongGuessBox").innerHTML = wrongGuesses;

	phase = "playing";
}; //closeout gameSetUp

//The actual playing of the game - reading user input, passing it through
//this function to: test if the user guess character is in the band name --
//if so - replace appropriate placeholder with user guess char
//      - if puzzle is completed; initiate round restart, ++ wins, ++ rounds
//if not - ++ the hangman image #, add user guess to The Gutter, -- remaing guesses
//       - if no misses remain;  
function nameGuessUpdate (userGuess) {
	var answer = currentBand.name;
	var puzzleProgress = currentBand.placeholder;
	var indexOfHits = [];

for(var i = 0; i < answer.length; i++) {
	if (userGuess == answer.charAt(i)) {
		indexOfHits.push(i);
	}
}

if (indexOfHits.length == 0){
	hangmanImageCounter++;
	missesRemaining--;
	wrongGuesses = wrongGuesses += userGuess;

	document.getElementById("lC").innerHTML = userLoses;
	document.getElementById("rC").innerHTML = totalRounds;
}

if (missesRemaining == 0) {
	hangmanImageCounter++;
/*	hangmanIcon.animate({
		width: 1000%;
		height: 1000%;


	}); */
	phase = "beginGame";
	totalRounds++;
	userLoses++;
}

if (answer == puzzleProgress) {
	userWins++;
	rounds++;
	phase = "beginGame";

	document.getElementById("wC").innerHTML = userWins;
}

}; //closeout nameGuessUpdate

};
/*
	for(var i = 0; i < answer.length; i++) {
		if (userGuess == answer.charAt(i)) {
			puzzleProgress.chatAt(i) = userGuess;
		} else (){

		}

	}

}

var indexOfHits = [];

for(var i = 0; i < answer.length; i++) {
	if (userGuess == answer.charAt(i)) {
		indexOfHits.push(i);
	}
}

if (indexOfHits.length == 0){
	hangmanImageCounter++;
	missesRemaining--;
	wrongGuesses.push(userGuess);
}

if (missesRemaining == 0) {
	hangmanImageCounter++;
	hangmanIcon.animate({
		width: 1000%;
		height: 1000%;


	});
	phase = "beginGame";
	rounds++;
	userLoses++;
}

if (answer == puzzleProgress) {
	wins++;
	rounds++;
	phase = "beginGame";
}
*/




// Updating the current progress of the user's guesses
/*
function nameGuessUpdate() {
	if(!endGame){

		if () {
			wrongGuesses.push(userGuess);
			for(var i=0, i < currentBandName.length; i++) {
				if (currentBand[i] === userGuess) {
					currentBandName[i] = userGuess;
					remainingLetters = remainingLetters -1;
				}
			}
		}
		currentGuessStatus = currentBandName.join(" ");
		document.getElementById("currentGuessStatus").innerHTML = "<h2>" + currentGuessStatus + "</h2>";

		if (remainingLetters <= 0) {
			userWins++;
			phase = "nextBandRound";
			document.getElementById("wC").innerHTML = wC;
		}
	}
}
var letIndices = [];
var let = currentBandName.indexOF(userGuess);

 if (let == -1) {
	run the Wrong Guess functions
	  increment up hangman img counter
	  push userGuess to wrongGuesses array

 } else () {
	while (let != -1) {
	  letIndices.push(let);
	  let = currentBandName.indexOF(userGuess, let + 1)
	}

 }
 
*/


