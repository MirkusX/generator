let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
const setLengthInput = document.getElementById("set-length")
const toggleSymNum = document.getElementById("toggle")


 
function clearInput() {
    firstPassword.value = ""
    secondPassword.value = ""
}

function generate() {
    if (toggleSymNum.checked === true) {
        characters = characters.splice(0, 51)
    } else if (toggleSymNum.checked === false) {
        characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/"];
    }
    setLength = setLengthInput.value
    for (i = 0; i < setLength; i++) {
    const firstGenerator = Math.floor(Math.random() * characters.length)
    const secondGenerator = Math.floor(Math.random() * characters.length)
    firstPassword.value +=  characters[firstGenerator]
    secondPassword.value += characters[secondGenerator]
}
}

function copyFirst() {
    firstPassword.select()
    document.execCommand("copy")
}

function copySecond() {
    secondPassword.select()
    document.execCommand("copy")
}