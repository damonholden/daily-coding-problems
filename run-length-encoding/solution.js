'use-strict';

function runLengthEncoder(string) {
  let accumulator = 1;
  let target = string[0];
  let result = '';

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      accumulator++;
    } else {
      result += `${accumulator}${target}`;

      target = string[i];
      accumulator = 1;
    }
  }

  result += `${accumulator}${target}`;

  return result;
}

function runLengthDecoder(string) {
  let result = '';
  for (let i = 0; i < string.length; i = i + 2) {
    let amount = string[i];
    let letter = string[i + 1];

    for (let i = 0; i < amount; i++) {
      result += letter;
    }
  }

  return result;
}

module.exports = { runLengthEncoder, runLengthDecoder };
