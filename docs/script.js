// Assignment code here
const characterStrings = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: "0123456789",
  specialCharacters: ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`
};

const criteria = {
  length: 8,
  chars: {
    lowercase: false,
    uppercase: false,
    numbers: false,
    specialCharacters: false
  }
};

function updateRange(e) {
  criteria.length = parseInt(e.target.value);
  document.querySelector('#range-val').innerText = e.target.value;
}

function validateChars(criteria) {
  return Object.keys(criteria)
    .filter(key => criteria[key]);
}

function buildWordbank(criteria, characterStrings) {
  return Object.keys(criteria)
    .filter(key => criteria[key])
    .map(key => characterStrings[key]).join('');
}

function buildPassword(wordbank, length) {
  return new Array(length).fill(0).map(_ => {
    return wordbank[Math.floor(Math.random() * wordbank.length)];
  }).join('');
}

// prompt user and generate password
function generatePassword(criteria) {
  if (validateChars(criteria.chars)) {
    const wordbank = buildWordbank(criteria.chars, characterStrings)
    return buildPassword(wordbank, criteria.length);
  }
  else {
    return "Invalid criteria. Please check one or more boxes below."
  }
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword(criteria);
  // make sure password isn't falsy. undefined mainly.
  if (password) {
    document.querySelector("#password").value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener for user pressing enter key
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    generateBtn.click();
  }
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(box => {
  box.addEventListener('click', (e) => {
    criteria.chars[e.target.name] = e.target.checked;
  });
});

document.querySelector('input[type="range"]').addEventListener('input', updateRange);