const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generatorEl = document.getElementById("generator");
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = upperLetters.toLowerCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";
pwEl.innerText = "please check what do you want";

function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function generatePassword() {
  if (lenEl.value <= 4 || lenEl.value >= 41) {
    lenEl.value = 4;
  }
  if (
    upperEl.checked ||
    lowerEl.checked ||
    symbolEl.checked ||
    numberEl.checked
  ) {
    let len = lenEl.value;
    let password = "";

    for (i = 0; i < len; i++) {
      let x = generateX();
      password += x;
    }
    pwEl.innerText = password;
  } else {
    pwEl.innerText = "please check what do you want";
  }
}
function generateX() {
  let xs = [];
  if (upperEl.checked) {
    xs.push(getUpperCase());
  }
  if (lowerEl.checked) {
    xs.push(getLowerCase());
  }
  if (numberEl.checked) {
    xs.push(getNumber());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }
  console.log(lenEl.value);

  return xs[Math.floor(Math.random() * xs.length)];
}
generatorEl.addEventListener("click", generatePassword);
copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = pwEl.innerText;
  if (!password | (password === "please check what do you want")) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("password copied to clipboard");
});
