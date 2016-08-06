window.onload = function() {

// Array containing band objects with name, mp3File, placeholder, and 
var band = [
	{
		'name': 'OPERATION_IVY',
		'mp3File': "assets/songs/Artificial Life - OPERATION IVY.mp3"

	},
	{
		'name': 'BLACK_FLAG',
		'mp3File': "assets/songs/Black Flag - Rise Above.mp3"
	},
	{
		'name': 'DESCENDENTS',
		'mp3File': "assets/songs/Descendents - Suburban Home.mp3"
	},
	{
		'name': 'FUGAZI',
		'mp3File': "assets/songs/Fugazi - Blueprint.mp3"
	},
	{
		'name': 'MINOR_THREAT',
		'mp3File': "assets/songs/Minor Threat, Minor Threat.mp3"
	},
	{
		'name': 'MISFITS',
		'mp3File': "assets/songs/Misfits- Skulls.mp3"
	},
	{
		'name': 'OPERATION_IVY',
		'mp3File': "assets/songs/Operation Ivy - Caution.mp3"
	},
	{
		'name': 'RAMONES',
		'mp3File': "assets/songs/Ramones - Rockaway Beach.mp3"
	},
	{
		'name': 'THE_CLASH',
		'mp3File': "assets/songs/THE CLASH-JANIE JONES.mp3"
	},
	{
		'name': 'THE_DEAD_KENNEDYS',
		'mp3File': "assets/songs/The Dead Kennedys - Holiday in Cambodia.mp3"
	},
	{
		'name': 'THE_SEX_PISTOLS',
		'mp3File': "assets/songs/the sex pistols bodies cd version.mp3"
	},
	{
		'name': 'YOUTH_OF_TODAY',
		'mp3File': "assets/songs/Youth of Today - One Family.mp3"
	}];

// Declaring game variables
var userGuess = "";
var userWins = 0;
var wrongGuesses = [];
var totalRounds = 0;
var currentBand = "";
var guessesRemaining = 10;

// Bootstrap 'Alerts'
function youLose() {
	<div class="alert alert-info">
        <a href="index.html" class="close" data-dismiss="alert" aria-label="close">&times;</a>
		<strong> Sorry Chump </strong>
		<br>
		You're about as punk as punk as Walmart the day after Thanksgiving
	</div>
}


