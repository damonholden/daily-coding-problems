const joinArraysAndSort = require('./solution');

describe('joinArraysAndSort', () => {
	it('should return an array', () => {
		expect(Array.isArray(joinArraysAndSort([
			[10, 15, 30],
			[12, 15, 20],
			[17, 20, 32],
		]))).toBe(true);
	});

	it('should only accept an array as an argument', () => {
		expect(() => joinArraysAndSort('hello')).toThrow();
		expect(() => joinArraysAndSort(123)).toThrow();
		expect(() => joinArraysAndSort({})).toThrow();
		expect(() => joinArraysAndSort(true)).toThrow();
		expect(() => joinArraysAndSort(null)).toThrow();
		expect(() => joinArraysAndSort(undefined)).toThrow();
		expect(() => joinArraysAndSort()).toThrow();
	});

	it('the array passed should only contain arrays', () => {
		expect(() => joinArraysAndSort([
			[10, 15, 30],
			[12, 15, 20],
			[17, 20, 32],
			'hello',
		])).toThrow();
	});

	it('should not accept an empty array', () => {
		expect(() => joinArraysAndSort([])).toThrow();
	});

	it('should not accept any empty sub-arrays', () => {
		expect(() => joinArraysAndSort([
			[10, 15, 30],
			[12, 15, 20],
			[17, 20, 32],
			[],
		])).toThrow();
	});


	it('should join arrays and sort them', () => {
		expect(
			joinArraysAndSort([
				[10, 15, 30],
				[12, 15, 20],
				[17, 20, 32],
			])
		).toEqual([10, 12, 15, 15, 17, 20, 20, 30, 32]);
	});
});
