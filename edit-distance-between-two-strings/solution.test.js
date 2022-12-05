const { calculateEditDistanceBetweenTwoStrings } = require('./solution');

describe('calculateEditDistanceBetweenTwoStrings()', () => {
  it('should return the edit distance between 2 strings', () => {
    expect(calculateEditDistanceBetweenTwoStrings('kitten', 'sitting')).toEqual(
      3
    );
    expect(calculateEditDistanceBetweenTwoStrings('sitting', 'kitten')).toEqual(
      3
    );
  });
});
