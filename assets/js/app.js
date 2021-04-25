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

/**
 * setGame()
 * sets the answer and blanks
 * @returns answer: string, compareString: string;
 */

const setGame = () => {
    const answer = getAnswer();
    setBlanks(answer);
    let compareString = getCompareString(answer);
    return { answer, compareString };
}

const getAnswer = () => {
    return wordBank[Math.floor(Math.random() * wordBank.length)];
}

const setBlanks = (answer) => {
    letters.innerText = "_ ".repeat(answer.length);
}

const getCompareString = (answer) => {
    return "_ ".repeat(answer.length);
}

const playGame = (answer, compareString) => {
    let validLetterNum = 0;
    inputSpace.addEventListener('keydown', function guess(e){
        let inputLetter = e.key.toLowerCase();
        // if the input is enter, clear the input space
        if(inputLetter === "enter"){
            // set the letters to be the resulting compareString
            letters.innerText = compareString;
            inputSpace.value = "";
            if(validLetterNum >= answer.length){
                console.log("End");
            }
        }
        else{
            for(let i = 0; i < answer.length; i++){
                if (answer[i] === inputLetter){
                    compareString = setCharAt(compareString, 2*i, inputLetter);
                    validLetterNum++;
                }
            }
        }    
    });
}

const setCharAt = (str, index, letter) =>{
    return str.substring(0, index) + letter + str.substring(index+1);
}

const render = () => {
    let { answer, compareString} = setGame();
    playGame(answer, compareString);
}

render();