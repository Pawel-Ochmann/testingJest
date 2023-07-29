const capitalize = function (text) {
  return text.toUpperCase();
};

const reverseString = function (text) {
  const textReversed = text.split('').reverse().join('');
  return textReversed;
};

function add(...args) {
  return args.reduce((sum, e) => {
    return sum + e;
  }, 0);
}

function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function multiply(...args) {
  return args.reduce((result, e) => {
    return result * e;
  }, 1);
}

const calculator = { add, subtract, divide, multiply };

function caesarCipher(text, shiftFactor) {
  const testIfLetter = /[a-z]/;
  return [...text]
    .map((letter) => {
      if (testIfLetter.test(letter))
        return String.fromCharCode(
          ((letter.charCodeAt(0) - 97 + shiftFactor) % 26) + 97
        );
      else return letter;
    })
    .join('');
}

function analyzeArray(array) {
  const analyzed = {
    average: null,
    min: null,
    max: null,
    length: null,
  };
  analyzed.average = Math.round(
    array.reduce((result, e) => {
      return result + e;
    }, 0) / array.length
  );
  if (array.length === 0) analyzed.average = null;
  analyzed.min = Math.min(...array);
  if (array.length === 0) analyzed.min = null;
  analyzed.max = Math.max(...array);
  if (array.length === 0) analyzed.max = null;
  analyzed.length = array.length;

  return analyzed;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
