const {uniformProbability} = require('./solution')

describe('uniformProbability', () => {
	it('should return a random item from the data stream', () => {
		const stream = [6, 4, 3, 2, 1, 5];
		const result = uniformProbability(stream);
		expect(stream).toContain(result);
	});
});
