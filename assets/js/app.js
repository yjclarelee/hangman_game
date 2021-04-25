import { wordBank } from "./wordbank.js";

// Algorithm
// 1. Randomly choose a word
// 2. Set the number of blanks according to the chosen word
// 3. Get the entered letter
// 4. Check the index where the letter exists
// 5. Set the blanks according to the entered letter

// Time Complexity
// The for loop goes through all the letters in the word
// this cause bad time complexity
// An alternative is using indexOf to decide if the letter is in the string
// and then find the indices that have that letter

let letters = document.getElementById("letters");
let inputSpace = document.getElementById("inputLetter");

const randomWordIndex = () => {
    let arrLength = wordBank.length;
    return Math.floor(Math.random() * arrLength);
}

const setCharAt = (str, index, letter) =>{
    return str.substring(0, index) + letter + str.substring(index+1);
}

function render() {
    const chosenWord = wordBank[randomWordIndex()];
    const chosenWordLength = chosenWord.length;
    
    letters.innerText = "_ ".repeat(chosenWordLength);;

    // initial string to compare with the chosen word
    let compareString = "_ ".repeat(chosenWordLength);
    // number of rightly guessed letters
    let validGuessNum = 0;

    inputLetter.addEventListener('keydown', function guess(e){
        
        // console.log(`Input: ${e.key} ${e.key.length}`);
        let inputLetter = e.key.toLowerCase();
        // if the input is enter, clear the input space
        if(inputLetter === "enter"){
            // set the letters to be the resulting compareString
            letters.innerText = compareString;
            inputSpace.value = "";
        }
        // if the input is not a letter, compare the input with letters in the chosen word
        else{
            // for each letter in the chosen word, compare with the input letter
            for(let i = 0; i < chosenWordLength; i++){
                if (chosenWord[i] === inputLetter.toLowerCase()){
                    // the compareString has spaces so the index must be calculated
                    compareString = setCharAt(compareString, 2*i, inputLetter);
                    compareString = setCharAt(compareString, 2*i+1, " ");
                    // if the input letter is the same as the chosen word's letter
                    // add 1 to the validGuessNum
                    validGuessNum++;
                }
            }
            // after setting the string with letters that are in the input letter
            // if the number of right guess letters is the same as the chosen word length
            // finish the program comes to an end
            if(validGuessNum === chosenWordLength){
                console.log("End");
            }
        }    
    });
}

render();