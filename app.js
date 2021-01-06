// Algorithm
// 1. Randomly choose a word
// 2. Set the number of blanks according to the chosen word
// 3. Get the entered letter
// 4. Check the index where the letter exists
// 5. Set the blanks according to the entered letter

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
    "basket"
]

let finished = false;

let letters = document.getElementById("letters");
let inputLetter = document.getElementById("inputLetter");

function main() {
    // choose index of random word
    let chosenWordNum = randomWord();
    // get chosen word and length of word
    let chosenWord = wordBank[chosenWordNum];
    let chosenWordLength = chosenWord.length;
    // set blanks according to the length of the random word
    let blankText = "_ ".repeat(chosenWordLength);
    letters.innerText = blankText;

    inputLetter.addEventListener('keydown', function (e){
        // length of input must be 1
        console.log(`Input: ${e.key} ${e.key.length}`);
        if (e.key.length !== 1){
            console.log("Invalid length of input");
        }
        let inputLetter = e.key,
            inputAscii = e.key.charCodeAt(0);
        let isUppercase = (inputAscii >= 65) && (inputAscii <= 90),
            isLowercase = (inputAscii >= 97) && (inputAscii <= 122);
        console.log(`Input 2: ${inputAscii}`);

        if((e.key !== 'Enter') && isUppercase || isLowercase){
            // check if letter is in chosen word

        }
        else{
            console.log("Invalid type of input text");
        }

        if(finished){
            removeEventListener();
        }

    });

        // let letter = inputLetter.;
        // console.log(letter);
    // }
}

const randomWord = () => {
    let arrLength = wordBank.length;
    return Math.floor(Math.random() * arrLength);
}


main();





// const wordBank = [
//     "angle",
//     "ant",
//     "apple",
//     "arch",
//     "arm",
//     "army",
//     "baby",
//     "bag",
//     "ball",
//     "band",
//     "basin",
//     "basket",
//     "bath",
//     "bed",
//     "bee",
//     "bell",
//     "berry",
//     "bird",
//     "blade",
//     "board",
//     "boat",
//     "bone",
//     "book",
//     "boot",
//     "bottle",
//     "box",
//     "boy",
//     "brain",
//     "brake",
//     "branch",
//     "brick",
//     "bridge",
//     "brush",
//     "bucket",
//     "bulb",
//     "button",
//     "cake",
//     "camera",
//     "card",
//     "cart",
//     "carriage",
//     "cat",
//     "chain",
//     "cheese",
//     "chest",
//     "chin",
//     "church",
//     "circle",
//     "clock",
//     "cloud",
//     "coat",
//     "collar",
//     "comb",
//     "cord",
//     "cow",
//     "cup",
//     "curtain",
//     "cushion",
//     "dog",
//     "door",
//     "drain",
//     "drawer",
//     "dress",
//     "drop",
//     "ear",
//     "egg",
//     "engine",
//     "eye",
//     "face",
//     "farm",
//     "feather",
//     "finger",
//     "fish",
//     "flag",
//     "floor",
//     "fly",
//     "foot",
//     "fork",
//     "fowl",
//     "frame",
//     "garden",
//     "girl",
//     "glove",
//     "goat",
//     "gun",
//     "hair",
//     "hammer",
//     "hand",
//     "hat",
//     "head",
//     "heart",
//     "hook",
//     "horn",
//     "horse",
//     "hospital",
//     "house",
//     "island",
//     "jewel",
//     "kettle",
//     "key",
//     "knee",
//     "knife",
//     "knot",
//     "leaf",
//     "leg",
//     "library",
//     "line",
//     "lip",
//     "lock",
//     "map",
//     "match",
//     "monkey",
//     "moon",
//     "mouth",
//     "muscle",
//     "nail",
//     "neck",
//     "needle",
//     "nerve",
//     "net",
//     "nose",
//     "nut",
//     "office",
//     "orange",
//     "oven",
//     "parcel",
//     "pen",
//     "pencil",
//     "picture",
//     "pig",
//     "pin",
//     "pipe",
//     "plane",
//     "plate",
//     "plow",
//     "pocket",
//     "pot",
//     "potato",
//     "prison",
//     "pump",
//     "rail",
//     "rat",
//     "receipt",
//     "ring",
//     "rod",
//     "roof",
//     "sail",
//     "school",
//     "scissors",
//     "screw",
//     "seed",
//     "sheep",
//     "shelf",
//     "ship",
//     "shirt",
//     "shoe",
//     "skin",
//     "skirt",
//     "snake",
//     "sock",
//     "spade",
//     "sponge",
//     "spoon",
//     "spring",
//     "square",
//     "stamp",
//     "star",
//     "station",
//     "stem",
//     "stick",
//     "stocking",
//     "stomach",
//     "store",
//     "street",
//     "sun",
//     "table",
//     "tail",
//     "thread",
//     "throat",
//     "thumb",
//     "ticket",
//     "toe",
//     "tongue",
//     "tooth",
//     "town",
//     "train",
//     "tray",
//     "tree",
//     "trousers",
//     "umbrella",
//     "wall",
//     "watch",
//     "wheel",
//     "whip",
//     "whistle",
//     "wing",
//     "wire",
//     "worm",
//   ];