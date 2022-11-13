const decodeWays = require('./solution');

describe('decodeWays', () => {
	it('should return the number of possible decodes', () => {
		expect(decodeWays('111')).toBe(3)
	})
})
