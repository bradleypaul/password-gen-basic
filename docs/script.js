// Assignment code here
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numerals = "0123456789";
const specialCharacters = ` !"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`;

// prompt user and generate password
function generatePassword() {
  const length = window.prompt("Provide password length:");
  if(length >= 8 && length <= 128) {
    const includeLowercase = confirm("Include lowercase letters?");
    const includeUppercase = confirm("Include uppercase letters?");
    const includeNumbers = confirm("Include numerical characters?");
    const includeSpecialCharacters = confirm("Include special characters?");
    if(includeLowercase || includeUppercase || includeNumbers || includeSpecialCharacters ) {
      let wordbank = '';
      if(includeLowercase) {
        wordbank += lowercase;
      }

      if(includeUppercase) {
        wordbank += uppercase;
      }

      if(includeNumbers) {
        wordbank += numerals;
      }

      if(includeSpecialCharacters) {
        wordbank += specialCharacters;
      }

      let password = "";
      for(let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * wordbank.length);
        password += wordbank[random];  
      }

      return password;
    }
    else {
      alert("No password criteria was selected. Please try again.")
    }
  }
  else {
    alert("Invalid length. Try again.");
  }

  //length was bad, or no criteria selected, implicitly return undefined.
}


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();

  // make sure password isn't falsy. undefined mainly.
  if(password) {
    document.querySelector("#password").value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
