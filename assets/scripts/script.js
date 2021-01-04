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

// main function elements
function generatePassword() {
    passLength = "";
    prefChar = "";
    randomChar = "";
    valitdateInput ();
    addChar (); 
    randomPassword ();
    return randomChar;
  }

  // prompt to choose pass length
  function valitdateInput() {
    while (isNaN(parseInt(passLength, 10)) 
    || parseInt(passLength, 10) < 8 
    || parseInt (passLength, 10) > 128) {
      passLength = prompt("Choose a password length between 8 - 128 characters");
    }
  }