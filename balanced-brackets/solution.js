'use strict';

function areBracketsBalanced(string) {
  const openingMatch = /[\(\[\{]/;
  const closingMatch = /[\)\]\}]/;

  const bracketsMatch = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  if (string.length % 2 === 1) {
    return false;
  }

  if (string[0].match(closingMatch)) {
    return false;
  }

  const openingBracketsArray = [];

  for (const character of string) {
    if (character.match(openingMatch)) {
      openingBracketsArray.push(character);

      continue;
    }

    if (openingBracketsArray.at(-1) === bracketsMatch[character]) {
      openingBracketsArray.pop();

      continue;
    }

    return false;
  }

  return true;
}

module.exports = { areBracketsBalanced }
