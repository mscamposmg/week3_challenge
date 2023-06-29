// Assignment Code
var generateBtn = document.querySelector("#generate");

function engenderPass() {
  
// Creating a list of Variables using ARRAY
const capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const smallLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numeral = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]", ":", ";", "?", ">", "<", ",", ".", "/", "-", "="];

// Initializing the variables of type array
var effectArray = [];
var costumerArray = [];

//The popup display has been created setting the password's lenght within 8 and 128
var numCharacter = prompt ("Enter the lenght of your password between 8 and 128");

// Asking the employee the options of the password
var numerals = confirm ("Include NUMBERS on Password?");
var smallLetters = confirm ("Include small letters on Password?");
var capitalLetters = confirm ("Include CAPITAL LETTERS on Password?");
var specialChars = confirm ("Include $peci@l Ch@r@cters on Password?");

// Conditioning of the variables array
if (numerals){ effectArray = effectArray.concat(numeral);}
if (smallLetters){  effectArray = effectArray.concat(smallLetter);}
if (capitalLetters){  effectArray = effectArray.concat(capitalLetter);}
if (specialChars){  effectArray = effectArray.concat(specialChar);}
console.log(effectArray)

// generate a randomic sequence password
for (var i = 0; i < numCharacter; i++) {
  costumerArray.push (effectArray[Math.floor(Math.random() * effectArray.length)]);
  }
  return costumerArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = engenderPass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


