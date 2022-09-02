let withNumbers;
let withLetters;
let withSpecialCharacters;
let withFullCharacers;
let salt;

const withNumbersElement = document.querySelector("#withNumbers");
const withLettersElement = document.querySelector("#withLetters");
const withSpecialCharactersElement = document.querySelector(
  "#withSpecialCharacters"
);
const withRandomElement = document.querySelector("#withRandom");
const saltElement = document.querySelector("#salt");
const buttonElement = document.querySelector("button");
const form = document.querySelector("form");
const result = document.querySelector(".generated-password");
const warnings = document.querySelector(".warnings");
const resultTitle = document.querySelector(".generated-password-title");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

withNumbersElement.addEventListener("click", (e) => {
  withNumbers = e.target.checked;
});

withLettersElement.addEventListener("click", (e) => {
  withLetters = e.target.checked;
});

withSpecialCharactersElement.addEventListener("click", (e) => {
  withSpecialCharacters = e.target.checked;
});

withRandomElement.addEventListener("click", (e) => {
  withFullCharacers = e.target.checked;
});
saltElement.addEventListener("input", (e) => {
  if (e.target.value == "") {
    e.target.value = 0;
  }
  salt = e.target.value;
});

buttonElement.addEventListener("click", () => {
  generatePassword({
    withNumbers,
    withLetters,
    withSpecialCharacters,
    withFullCharacers,
    salt
  });
});

function generatePassword({
  withNumbers = false,
  withLetters = false,
  withSpecialCharacters = false,
  withFullCharacers = false,
  salt = 6
}) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const specialCharacters = ["!", "@", "#", "*", "-", "+", "."];

  const fullCharacers = [...numbers, ...letters, ...specialCharacters];

  let passwordHash = "";

  if (
    salt >= 6 &&
    withNumbers == false &&
    withLetters == false &&
    withSpecialCharacters == false &&
    withFullCharacers == false
  ) {
    return defaultPassword();
  }

  if (salt < 6) {
    return defaultPassword();
  }

  function defaultPassword() {
    if (salt > 30) {
      salt = 30;
      for (let index = 0; index <= salt; index++) {
        var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
        var randomLetters = letters[Math.floor(Math.random() * letters.length)];
        var randomFullCharacers =
          fullCharacers[Math.floor(Math.random() * fullCharacers.length)];
        var randomSpecialCharacters =
          specialCharacters[
            Math.floor(Math.random() * specialCharacters.length)
          ];

        passwordHash =
          passwordHash.toString() +
          randomNumbers.toString() +
          randomLetters.toString() +
          randomFullCharacers.toString() +
          randomSpecialCharacters.toString();
      }

      warnings.textContent = `O valor maxímo de dificuldade permitido é ${salt}`;
      result.textContent = `${passwordHash}`;
      resultTitle.textContent = "Senha gerada: ";
      return;
    }

    for (let index = 0; index <= salt; index++) {
      var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
      var randomLetters = letters[Math.floor(Math.random() * letters.length)];
      var randomFullCharacers =
        fullCharacers[Math.floor(Math.random() * fullCharacers.length)];
      var randomSpecialCharacters =
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

      passwordHash =
        passwordHash.toString() +
        randomNumbers.toString() +
        randomLetters.toString() +
        randomFullCharacers.toString() +
        randomSpecialCharacters.toString();
    }
    warnings.textContent = `Valor de dificuldade ${salt} caso queira uma senha mais forte sugerir uma valor maior`;
    result.textContent = `${passwordHash}`;
    resultTitle.textContent = "Senha gerada: ";
    return;
  }

  if (salt > 30) {
    salt = 30;
  }

  for (let index = 0; index < salt; index++) {
    if (withNumbers == true) {
      var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
    }
    randomNumbers ??= "";

    if (withLetters == true) {
      var randomLetters = letters[Math.floor(Math.random() * letters.length)];
    }
    randomLetters ??= "";

    if (withSpecialCharacters == true) {
      var randomSpecialCharacters =
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    randomSpecialCharacters ??= "";

    if (withFullCharacers == true) {
      var randomFullCharacers =
        fullCharacers[Math.floor(Math.random() * fullCharacers.length)];
    }
    randomFullCharacers ??= "";

    passwordHash =
      passwordHash.toString() +
      randomNumbers.toString() +
      randomLetters.toString() +
      randomFullCharacers.toString() +
      randomSpecialCharacters.toString();
  }

  warnings.textContent = `Sua senha foi gerada com a dificuldade ${salt} utilizando: ${
    withNumbers ? "Números - " : ""
  }${withLetters ? "Letras - " : ""}${
    withSpecialCharacters ? "Caracteres especiais - " : ""
  }${withFullCharacers ? "Caracteres aleatorios - " : ""} `;
  result.textContent = `${passwordHash} `;
  resultTitle.textContent = "Senha gerada: ";
  return;
}
