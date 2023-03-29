var programmingLanguge =
	[
		"python",
		"javascript",
		"mongodb",
		"json",
		"java",
		"html",
		"css",
		"c",
		"csharp",
		"golang",
		"kotlin",
		"php",
		"sql",
		"ruby"
	]

var hint = ["Easy to learn,Object-Oriented and Procedure-Oriented", "programming language of web", "cross-platform document-oriented database program", "standard text-based format for representing structured data based on JavaScript object syntax", "Developed by Sun Microsystems in the year 1995", "Used for creating websites", "styling websites", "method-oriented, general-purpose programming language", "programming language developed by Microsoft that runs on the .NET Framework", "programming language designed at Google",
	"used by android developers", "used to create scripts that run on the server", "used for storing, manipulating and retrieving data in databases", "Perl and Smalltalk mainly influenced the development of this language"]



let answer = " ";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
var index = " ";


function randomWord() {
	index = Math.floor(Math.random() * programmingLanguge.length);
	answer = programmingLanguge[index]
	console.log(index);
}

function getHint() {
	document.getElementById("hint").innerHTML = hint[index];
}


function generateButtons() {
	let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
		`
		<button
		  class="btn btn-lg btn-primary m-2"
		  id='` + letter + `'
		  onClick="handleGuess('` + letter + `')"
		>
		  ` + letter + `
		</button>
	  `).join('');

	document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(choosenLetter) {
	guessed.indexOf(choosenLetter) === -1 ? guessed.push(choosenLetter) : null;
	document.getElementById(choosenLetter).setAttribute('disabled', true);


	if (answer.indexOf(choosenLetter) >= 0) {
		guessWord();
		checkIfGameWon();
	} else if (answer.indexOf(choosenLetter) === -1) {
		mistakes++;
		updateMistakes();
		checkIfGameLost();
		updateHangmnPicture();
	}
}

function updateHangmnPicture() {
	document.getElementById('haangmanPic').src = './images/' + mistakes + '.jpg';

}

function checkIfGameWon() {
	if (wordStatus === answer) {
		document.getElementById("keyboard").innerHTML = "YOU WON!!";
	}
}


function checkIfGameLost() {
	if (mistakes === maxWrong) {
		document.getElementById("keyboard").innerHTML = "You lost!!"
		document.getElementById("wordspotlight").innerHTML = "The correct answer is: " + answer;
	}
}

function guessWord() {
	wordStatus = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_")).join(" ");

	document.getElementById("wordspotlight").innerHTML = wordStatus;
}

function updateMistakes() {
	document.getElementById("mistakes").innerHTML = mistakes;
}

function reset() {
	mistakes = 0;
	guessed = [];
	document.getElementById("haangmanPic").src = "./images/0.jpg";
	randomWord();
	guessWord();
	generateButtons();
	updateMistakes();
	document.getElementById("hint").innerHTML = " ";

}


document.getElementById("maxWrong").innerHTML = maxWrong;



randomWord();
generateButtons();
guessWord();