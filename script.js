// Assignment Code
var generateBtn = document.querySelector("#generate");

// Random Letter Generator
function generateLowerCaseLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwyxz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function generateUpperCaseLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}
 

function generatePassword() {
  var lengthChoice = window.prompt("Choose Length of Password, Must be between 8 and 128 Characters");

  if (lengthChoice < 8 || lengthChoice > 128) {
    return
  }

  var lowerCase = window.confirm("Include lower case letters?")

  if (lowerCase === true) { 
    function generateLowerCaseLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwyxz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }


  }
}

console.log(generatePassword());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
