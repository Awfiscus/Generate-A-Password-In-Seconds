// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbols = "!@#$%&?"
var numbers = "123456789"
var passwordChoices = " "

//activated function when button is clicked
function generatePassword() {
  var password = " "

  //prompt allows user to choose length
  var lengthChoice = window.prompt("How many Characters would you like to have, Choose between 8 - 128");
  //if user choice is not within parameters then dialog box is exited with a message
  if(lengthChoice < 8 || lengthChoice > 128) {
    alert("Invalid Choice")
    return
  }
  //confirm commands save variables to determine which characters to add to password
  var lower = window.confirm("Would you like to have lower case letters?")
  var upper = window.confirm("Would you like to have Upper case letters?")
  var sym = window.confirm("Would you like to include symbols?")
  var nums = window.confirm("Would you like to include numbers?")
  //if not characters is chosen action is exited
  if((lower || upper || sym || nums) === false) {
    window.alert("You must include one selection");
    return;
  }
  //if statements belows add strings to passwordChoice Array if confirmed by user
  if (lower) {
    passwordChoices += lowerCase
  }

  if (upper) {
    passwordChoices += upperCase
  }

  if (sym) {
    passwordChoices += symbols
  }

  if (nums) {
    passwordChoices += numbers
  }
  //for loop builds password based on lengthChoice chosen by user
  for(var i = 0; i < lengthChoice; i++) {
    
    var randomIndex = Math.floor(Math.random() * passwordChoices.length)

    password += passwordChoices[randomIndex]
  }
  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
//Removed () at end of writePassword so it runs when clicked.
generateBtn.addEventListener("click", writePassword);
