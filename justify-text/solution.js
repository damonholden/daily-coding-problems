'use strict';

function justify(words, width) {
  const result = [];
  let line = '';

  for (const word of words) {
    if (word.length > width) {
      return null;
    }

    if (`${line}${word}`.length > width) {
      line = pad(line);
      result.push(line);
      line = word;
    }

		else {
      line += line.length === 0 ? word : ` ${word}`;
    }
  }

  result.push(pad(line, width));

  return result;

  function pad(providedLine) {
    const remainingSpace = width - providedLine.length;
    const spaces = providedLine.match(/ /g);

    for (let i = 0; i < remainingSpace; i++) {
      spaces[i % spaces.length] += ' ';
    }

    return spaces.reduce(
      (accumulator, current) =>
        accumulator.replace(/(?<=[^ ]) (?=[^ ])/, current),
      providedLine
    );
  }
}

module.exports = { justify };
