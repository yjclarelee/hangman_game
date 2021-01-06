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

const wordBank = [
    "angle",
    "ant",
    "apple",
    "arch",
    "arm",
    "army",
    "baby",
    "bag",
    "ball",
    "band",
    "basin",
    "basket",
    "bath",
    "bed",
    "bee",
    "bell",
    "berry",
    "bird",
    "blade",
    "board",
    "boat",
    "bone",
    "book",
    "boot",
    "bottle",
    "box",
    "boy",
    "brain",
    "brake",
    "branch",
    "brick",
    "bridge",
    "brush",
    "bucket",
    "bulb",
    "button",
    "cake",
    "camera",
    "card",
    "cart",
    "carriage",
    "cat",
    "chain",
    "cheese",
    "chest",
    "chin",
    "church",
    "circle",
    "clock",
    "cloud",
    "coat",
    "collar",
    "comb",
    "cord",
    "cow",
    "cup",
    "curtain",
    "cushion",
    "dog",
    "door",
    "drain",
    "drawer",
    "dress",
    "drop",
    "ear",
    "egg",
    "engine",
    "eye",
    "face",
    "farm",
    "feather",
    "finger",
    "fish",
    "flag",
    "floor",
    "fly",
    "foot",
    "fork",
    "fowl",
    "frame",
    "garden",
    "girl",
    "glove",
    "goat",
    "gun",
    "hair",
    "hammer",
    "hand",
    "hat",
    "head",
    "heart",
    "hook",
    "horn",
    "horse",
    "hospital",
    "house",
    "island",
    "jewel",
    "kettle",
    "key",
    "knee",
    "knife",
    "knot",
    "leaf",
    "leg",
    "library",
    "line",
    "lip",
    "lock",
    "map",
    "match",
    "monkey",
    "moon",
    "mouth",
    "muscle",
    "nail",
    "neck",
    "needle",
    "nerve",
    "net",
    "nose",
    "nut",
    "office",
    "orange",
    "oven",
    "parcel",
    "pen",
    "pencil",
    "picture",
    "pig",
    "pin",
    "pipe",
    "plane",
    "plate",
    "plow",
    "pocket",
    "pot",
    "potato",
    "prison",
    "pump",
    "rail",
    "rat",
    "receipt",
    "ring",
    "rod",
    "roof",
    "sail",
    "school",
    "scissors",
    "screw",
    "seed",
    "sheep",
    "shelf",
    "ship",
    "shirt",
    "shoe",
    "skin",
    "skirt",
    "snake",
    "sock",
    "spade",
    "sponge",
    "spoon",
    "spring",
    "square",
    "stamp",
    "star",
    "station",
    "stem",
    "stick",
    "stocking",
    "stomach",
    "store",
    "street",
    "sun",
    "table",
    "tail",
    "thread",
    "throat",
    "thumb",
    "ticket",
    "toe",
    "tongue",
    "tooth",
    "town",
    "train",
    "tray",
    "tree",
    "trousers",
    "umbrella",
    "wall",
    "watch",
    "wheel",
    "whip",
    "whistle",
    "wing",
    "wire",
    "worm",
  ];

let letters = document.getElementById("letters");
let inputSpace = document.getElementById("inputLetter");

function main() {
    // choose index of random word
    let chosenWordNum = randomWord();
    // get chosen word and length of word
    let chosenWord = wordBank[chosenWordNum],
        chosenWordLength = chosenWord.length;
    // set blanks according to the length of the random word
    let blankText = "_ ".repeat(chosenWordLength);
    letters.innerText = blankText;
    console.log(chosenWord);
    // initial string to compare with the chosen word
    let compareString = "_ ".repeat(chosenWordLength);
    // number of rightly guessed letters
    let validGuessNum = 0;

    inputLetter.addEventListener('keydown', function guess(e){
        
        // console.log(`Input: ${e.key} ${e.key.length}`);
        let inputLetter = e.key;
        // if the input is enter, clear the input space
        if(inputLetter === "Enter"){
            inputSpace.value = "";
        }
        // if the input is not a letter, compare the input with letters in the chosen word
        else{
            // for each letter in the chosen word, compare with the input letter
            for(let i = 0; i < chosenWordLength; i++){
                if (chosenWord[i] === inputLetter){
                    // the compareString has spaces so the index must be calculated
                    compareString = setCharAt(compareString, 2*i, inputLetter);
                    compareString = setCharAt(compareString, 2*i+1, " ");
                    // if the input letter is the same as the chosen word's letter
                    // add 1 to the validGuessNum
                    validGuessNum++;
                }
            }
            // after setting the string with letters that are in the input letter
            // set the letters to be the resulting compareString
            letters.innerText = compareString;
            // if the number of right guess letters is the same as the chosen word length
            // finish the program comes to an end
            if(validGuessNum === chosenWordLength){
                console.log("End");
            }
        }    
    });
}

const randomWord = () => {
    let arrLength = wordBank.length;
    return Math.floor(Math.random() * arrLength);
}

const setCharAt = (str, index, letter) =>{
    return str.substring(0, index) + letter + str.substring(index+1);
}

main();