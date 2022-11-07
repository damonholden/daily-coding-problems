const doAnyTwoNumbersAddUpToTarget = require('./my-solution');

describe('doAnyTwoNumbersAddUpToTarget', () => {
	it('should only accept an array as the first parameter', () => {
		expect(() => {
			doAnyTwoNumbersAddUpToTarget('hello', 10);
		}).toThrow();
	});

	it('should only accept a number as the second parameter', () => {
		expect(() => {
			doAnyTwoNumbersAddUpToTarget([1, 2, 3], 'hello');
		}).toThrow();
	});

	it('should return an array', () => {
		expect(Array.isArray(doAnyTwoNumbersAddUpToTarget([1, 2, 3], 10))).toBe(true);
	});

	it('should return an empty array if no pairs add up to the target', () => {
		expect(doAnyTwoNumbersAddUpToTarget([1, 2, 3], 10)).toEqual([]);
	});

	it('should return an array of pairs that add up to the target', () => {
		expect(doAnyTwoNumbersAddUpToTarget([1, 2, 3, 4, 5, 6, 7, 8], 10)).toEqual([
			[2, 8],
			[3, 7],
			[4, 6],
		]);
	});

	it('should not return duplicate pairs', () => {
		expect(doAnyTwoNumbersAddUpToTarget([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toEqual([
			[1, 9],
			[2, 8],
			[3, 7],
			[4, 6],
		]);
	});

});
