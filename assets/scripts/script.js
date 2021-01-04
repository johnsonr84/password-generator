generateBtn = document.querySelector("generate");

// function writes password to the text area
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// variable for password length
var passLength = "";
// variable for password charaters
var prefChar = "";
// variable for random password charaters
var randomChar = "";

function generatePassword() {
    passLength = "";
    prefChar = "";
    randomChar = "";
    valitdateInput ();
    addChar (); 
    randomPassword ();
    return randomChar;
  }