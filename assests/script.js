// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lower = "abcdefghijklmnopqrstuvwxyz".split("")
var num = "1234567890".split("")
var sym = "!#$%&'()*+,-./:;<=>?@[\]^_{|}~".split("")


// Write password to the #password input
function generatePassword() {
  var possiblePassword = []

  var generate = prompt("Choose a length of at least 8 characters and no more than 128 characters");

  if (generate < 8 || generate > 128) {
    generatePassword()
  } else if (isNaN(generate)) {
    generate = prompt("Choose a valid number")
  }
  // UPPERCASE
  var upperCase = confirm("Does your heart desire UPPERCASE letters?")
  if (upperCase === true) {
    possiblePassword = possiblePassword.concat(upper);
  }

  //lowercase
  var lowerCase = confirm("Does your heart desire lowercase letters?")
  if (lowerCase === true) {
    possiblePassword = possiblePassword.concat(lower);
  }

  //numbers
  var numCase = confirm("Does your heart desire numbers?")
  if (numCase === true) {
    possiblePassword = possiblePassword.concat(num);
  }

  //symbols
  var symCase = confirm("Does your heart desire cool symbols?")
  if (symCase === true) {
    possiblePassword = possiblePassword.concat(sym);
  }

  //randomizes password
  let randomPassword = ""
  for (let i = 0; i < generate; i++) {
    var random = Math.floor(Math.random() * possiblePassword.length)
    randomPassword = randomPassword + possiblePassword[random];
  }
  console.log(possiblePassword)
  return randomPassword;
};

//generate the password and put into text box
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// screen shot and send to Kyle

// for (var i = 0; i < password.Length; i++)

