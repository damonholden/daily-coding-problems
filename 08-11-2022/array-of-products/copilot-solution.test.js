const createArrayOfProductsFromProvidedArrayMinusTheIndex = require("./copilot-solution");

describe('createArrayOfProductsPfProvidedArray', () => {
	it('should only accept an array as a parameter', () => {
		expect(() => createArrayOfProductsPfProvidedArray('test')).toThrow();
		expect(() => createArrayOfProductsPfProvidedArray(123)).toThrow();
		expect(() => createArrayOfProductsPfProvidedArray({})).toThrow();
		expect(() => createArrayOfProductsPfProvidedArray(true)).toThrow();
		expect(() => createArrayOfProductsPfProvidedArray(null)).toThrow();
		expect(() => createArrayOfProductsPfProvidedArray(undefined)).toThrow();
		expect(() => createArrayOfProductsPfProvidedArray()).toThrow();

	});

	it('should not accept an empty array', () => {
		expect(() => createArrayOfProductsPfProvidedArray([])).toThrow();
	});

	it('should not accept an array with only one element', () => {
		expect(() => createArrayOfProductsPfProvidedArray([1])).toThrow();
	});

	it('should only accept an array of numbers', () => {
		expect(() => createArrayOfProductsPfProvidedArray(['test'])).toThrow();
		expect(() => createArrayOfProductsPfProvidedArray([1, 'test'])).toThrow();
	});

	it('should return an array', () => {
		expect(Array.isArray(createArrayOfProductsPfProvidedArray([1, 2, 3]))).toBe(true);
	});

	it('should return an array of the same length as the provided array', () => {
		expect(createArrayOfProductsPfProvidedArray([1, 2, 3]).length).toBe(3);
	});

	it('should return an array of the products of all the numbers in the provided array except the number at the current index', () => {
		expect(createArrayOfProductsPfProvidedArray([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
		expect(createArrayOfProductsPfProvidedArray([3, 2, 1])).toEqual([2, 3, 6]);
	});

});
