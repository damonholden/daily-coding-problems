const autoComplete = require('./solution');

describe('autoComplete', () => {
  it('should return an array of all the strings in the array that include the query string', () => {
		expect(autoComplete('de', ['dog', 'deer', 'deal'])).toStrictEqual(['deer', 'deal'])
	});
});
