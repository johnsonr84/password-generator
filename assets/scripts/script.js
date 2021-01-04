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
    validateInput ();
    addChar (); 
    randomPassword ();
    return randomChar;
  }

  // prompt to choose pass length
  function validateInput() {
    while (isNaN(parseInt(passLength, 10)) 
    || parseInt(passLength, 10) < 8 
    || parseInt (passLength, 10) > 128) {
      passLength = prompt("Choose a password length between 8 - 128 characters");
    }
  }

  // User prompt options to choose from to generate a random password
function addChar() {
    var promptNumber = confirm("Do you want numbers in your generated password?");
    var promptUpperCase = confirm("Do you want uppercase letters in your generated password?");
    var promptLowerCase = confirm("Do you want lowercase letters in your generated password?");
    var promptSpecialChar = confirm("Do you want special characters in your generated password?");

    if (promptNumber) {
        var numbers = "0123456789";
        prefChar += numbers
    }
    if (promptUpperCase) {
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        prefChar += uppercase
    }
    if (promptLowerCase) {
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        prefChar += lowercase
    }
    if (!promptNumber && !promptUpperCase) {
        alert("Password must be at least 8 characters long and contain numbers, upercase and lowercase letters, and a special character.") 
        addChar();
    }
      return prefChar
}