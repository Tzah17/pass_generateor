const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let button = document.querySelector("#button-el")
let pass1El = document.querySelector("#pass1-el")
let pass2El = document.querySelector("#pass2-el")
// let lengthEl = document.querySelector("#length-el")
// let symbolsEl = document.querySelector("#symbols-el")
// let numbersEl = document.querySelector("#numbers-el")

button.addEventListener("click", (e) => {
    //first I'll get the desired lenght for the pass
    let lengthEl = document.querySelector("#length-el").value; //Here im taking the input of the 
    lengthEl = lengthEl.replace(/\D/g, "");
    Number(lengthEl)
    //Checking that the length is not less then 10
    if (lengthEl < 10 || lengthEl>20) {
        message = "Password must have 10-20 charecters"
        alert(message)
    } else {
        //Next I need to get the checkboxes
        let symbolsEl = document.querySelector("#symbols-el").checked;
        let numbersEl = document.querySelector("#numbers-el").checked;
        //Taking care of the characters set that I'll be useing to generates the pass - will be effected by the checkboxes
        let characters = letters.concat(symbols, numbers)
        if (!symbolsEl && numbersEl) {
            characters = letters.concat(numbers)
        } else if (symbolsEl && !numbersEl) {
            characters = letters.concat(symbols)
        } else if (!symbolsEl && !numbersEl) {
            characters = letters
        }

        let pass1 = getRandom(characters, lengthEl)
        let pass2 = getRandom(characters, lengthEl)
        console.log(pass1)
        console.log(pass2)
        pass1El.textContent = pass1
        pass2El.textContent = pass2
    }
})



//Getting random number based on the length of the relevant charecters set
function getRandom(characters, length) {
    let pass = ""
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * (characters.length))
        pass += characters[random]
    }
    return pass
}