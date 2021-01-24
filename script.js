// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbols = "!@#$%&?"
var numbers = "123456789"
var passwordChoices = " "



var lengthChoice = window.prompt("How many Characters would you like to have, Choose between 8 - 128");

if(lengthChoice < 8 || lengthChoice > 128) {
    alert("Invalid Choice")
}
var lower = window.confirm("Would you like to have lower case letters?")
var upper = window.confirm("Would you like to have Upper case letters?")

function generatePassword() {
  var password = " "

  if (lower) {
    passwordChoices += lowerCase
  }

  if (upper) {
    passwordChoices += upperCase
  }

  for(var i = 0; i < lengthChoice; i++) {
    
    var randomIndex = Math.floor(Math.random() * passwordChoices.length)

    password += passwordChoices[randomIndex]
  }
  return password
}

console.log(generatePassword());


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
