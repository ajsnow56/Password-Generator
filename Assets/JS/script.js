// Welcome alert
  alert("Welcome to Aj's rando wordpass!")
 var generateBtn = document.querySelector("#generate");
   // Create password criteria
  function generatePassword(){  
  var passLength = Number(prompt("Password Length?"));
  var password = "";  
  var passwordChars = "";
// confirm statements to establish password criteria
if (confirm("Include lowercase characters?")) {
  passwordChars += "abcdefghijklmnopqrstuvwxyz"
  }
if (confirm("Include UPPERCASE characters?")) {
passwordChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
} if (confirm("Include Numbers?")) {
  passwordChars += "123456789"
} if (confirm("Include Special characters?")) {
  passwordChars += "!#$%&@?*<>/"
  console.log(passwordChars);
  console.log(passLength);
} 
else return password;
// for loop to create randomize element
for(var i = 0; i < passLength; i++){
  password += passwordChars.charAt(Math.floor(Math.random() * Math.floor(passwordChars.length )));
}

return(password)

};
// targets password ID and writes new password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
