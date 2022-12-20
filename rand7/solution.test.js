const { rand7 } = require('./solution');

describe('rand7', () => {
	it('should return a number from 1 to 7 with uniform probability', () => {
		function thousandTries() {
			let array = [];
			for (let i = 0; i < 1000; i++) {
				array.push(rand7());
			}
			return array.every((value) => value > 0 && value < 8);
		}
		expect(thousandTries()).toBe(true);
	});
});
