 // Set the range of numbers
 let low = 1;
 let high = 10;

 // Select a random number from the range
 let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;

 // Initialize the number of chances
 let chances = 3;

 function guessNumber() {
     // Get user input
     let userGuess = parseInt(prompt("Guess a number between " + low + " and " + high));

     // Run the loop 3 times
     for (let i = 0; i < 3; i++) {
         // Check if the guess is correct
         if (userGuess === correct_ans) {
             alert("Congratulations! You guessed the correct number.");
             disableInput();
             return;
         } else {
             // Give hints and reduce chances
             if (userGuess < correct_ans) {
                 alert("Correct answer is greater! Chances left: " + (chances - 1));
             } else {
                 alert("Correct answer is smaller! Chances left: " + (chances - 1));
             }
             chances--;

             // Ask for input again if chances are remaining
             if (chances > 0) {
                 userGuess = parseInt(prompt("Try again. Guess a number between " + low + " and " + high));
             }
         }
     }

     // If all chances are used and the correct answer is not guessed
     alert("You lose! The correct answer was: " + correct_ans);
     disableInput();
 }

 function disableInput() {
     // Disable the input field after the game is over
     document.getElementById("guessInput").disabled = true;
 }

 function restartGame() {
     // Reset chances, generate a new random number, and enable the input field
     chances = 3;
     correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;
     document.getElementById("guessInput").disabled = false;
 }