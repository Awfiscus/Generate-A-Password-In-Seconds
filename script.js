// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbols = "!@#$%&?"
var numbers = "123456789"
var lengthChoice = " "
var passwordChoices = " "

var choices = function() {
  var lengthChoice = prompt("How many Characters would you like to have, Choose between 8 - 128")
  if(lengthChoice < 8 || lengthChoice > 128) {
    alert("Invalid Choice")
  }
  else {
    var lowerCase = confirm("Would you like to have lower case letters?")
  } if (lowerCase) {
    passwordChoices += lowerCase
  } var upperCase = confirm("Would you like to have Upper case letters?")
  if(upperCase) {
    passwordChoices += upperCase
  }
}
choices()

console.log(passwordChoices);
// function generatePassword() {
  
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
