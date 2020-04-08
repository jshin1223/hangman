let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();

let revealedLetters = new Array(word.length);
revealedLetters.fill(false);

const maxStrikes = 6;
let strikes = 0; 

let strikeLetters = new Array(maxStrikes); 

drawWordProgress(); 

// Manipulates the DOM to write all the strike letters to the appropriate section in hangman.html
function drawStrikeLetters() {
    // your DOM manipulation code here
    incorrect = document.getElementById("incorrect").innerHTML = strikeLetters.toString();
    // should create a String from strikeLetters and put that into the content of some element.
}


// Manipulates the DOM to write the successfully guessed letters of the word, replacing them with dashes if not yet guessed
function drawWordProgress() {
    console.log(revealedLetters);
    let output = "";
    for(let n = 0; n< revealedLetters.length; n++) {
        if(revealedLetters[n] == true)
            output += word[n] + " ";
        else
            output += " - ";
    }
    document.getElementById("drawRevealedLetters").innerHTML = output;
}





// Manipulates the DOM to update the image of the gallows for the current game state.
function drawGallows() { 
    // your DOM manipulation code here 
    document.getElementById("hangedman").src = "images/strike-"+strikes+".png";
}
    document.getElementById("guessingform").addEventListener("submit", processGuess);
    function processGuess(event){
        event.preventDefault();
        let guess = document.getElementById("letterInput").value.toUpperCase();
        if(strikes < maxStrikes) {
            if (word.includes(guess)) {
                alert("Correct! You got it!");
                for (n in word) {
                    if (guess == word[n]) {
                        revealedLetters[n] = true;
                    }
                }
                drawWordProgress();
                if ((revealedLetters.includes(false) == false)) {
                    alert("Player 2 wins!");
                }
            }
            else {
                alert("Sorry. Please try again.");
                strikeLetters[strikes++] = guess;
                drawGallows();
                drawStrikeLetters();
            }
        }
        else {
            alert("The game is over!");
            
        }
    }
      
