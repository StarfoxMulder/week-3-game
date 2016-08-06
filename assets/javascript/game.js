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
var wrongGuesses = [];
var totalRounds = 0;
var currentBand = "";
var guessesRemaining = 10;
var step = "beginGame"

//switch case controlling gameflow
document.onkeyup = function(event) {
	userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	switch(step) {

		case "endGame":
			break;

		case "beginGame":
			songSetUp();
			songSelection();


		case "nextBandRound":
	}
}


//Choosing a random song to play the game with
function songSelection() {
	var ranSongIndex = math.floor(Math.random()* band.length +1);
	var currentBand = band.indexOF(ranSongIndex);
	currentBand.mp3File.play();
}


// Game Initiation starts from default switch case
function songSetUp () {
	document.getElementById("wC").innerHTML = userWins;
	document.getElementById("rC").innerHTML = totalRounds;
	document.getElementById("userAlert").innerHTML = "<p>WHAT BAND IS THIS?</p>";
	document.getElementById("guessRemain").innerHTML = guessesRemaining;
}


// Updating the current progress of the user's guesses
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
			step = "nextBandRound";
			document.getElementById("wC").innerHTML = wC;
		}
	}
}

document.onkeyup = function(event) {
	userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	switch(step) {

		case "endGame":
			break;

		case "beginGame":

		case "nextBandRound":
	}
}








		document.getElementById("userAlert").innerHTML = "<p> PRESS ANY KEY TO START<p><br><p>YOU MAY ENTER $ AT ANY TIME TO QUIT.</p>";
		document.getElementById("wC").innerHTML = userWins;
		document.getElementById("rC").innerHTML = totalRounds;
		document.getElementById("userAlert").innerHTML
		document.getElementById("").innerHTML
		songSelector;



		document.getElementById("userAlert").innerHTML
		document.getElementById("userAlert").innerHTML
		document.getElementById("userAlert").innerHTML
		document.getElementById("userAlert").innerHTML

	}

};



