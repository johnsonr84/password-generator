generateBtn = document.querySelector("generate");

// function writes password to the text area
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// add event listener to generate button
generateBtn.addEventListener("click",)