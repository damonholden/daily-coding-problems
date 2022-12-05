function calculateEditDistanceBetweenTwoStrings(string1, string2) {
  let changesRequired = Math.abs(string1.length - string2.length);

  for (let i = 0; i < Math.min(string1.length, string2.length); i++) {
    if (string1[i] !== string2[i]) {
      changesRequired++;
    }
  }

  return changesRequired;
}

module.exports = { calculateEditDistanceBetweenTwoStrings };
