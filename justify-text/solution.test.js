const { justify } = require('./solution');

describe('justify()', () => {
  const test = [
    'the',
    'quick',
    'brown',
    'fox',
    'jumps',
    'over',
    'the',
    'lazy',
    'dog',
  ];
  it('should return an array', () => {
    expect(Array.isArray(justify(test, 16))).toBe(true);
  });

  it('should throw if any of the words are longer than the length provided', () => {
    expect(justify(test, 4)).toBe(null);
  });

  describe('the returned array', () => {
    it('should only contain strings', () => {
      expect(
        justify(test, 16).every((string) => typeof string === 'string')
      ).toBe(true);
    });
    it('should contain strings that are each equal to the length provided', () => {
      const result = justify(test, 16);
      expect(result.every((v) => v.length === 16)).toBe(true);
    });

    it('should contain all the words in the original string', () => {
      expect(justify(test, 16).flat().join('').replaceAll(' ', '')).toEqual(
        test.join('')
      );
    });

    //TODO add tests for the spacing
  });
});
