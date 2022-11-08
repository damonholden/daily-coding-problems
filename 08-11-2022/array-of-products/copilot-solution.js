const createArrayOfProductsFromProvidedArrayMinusTheIndex = (array) => {
	if (!Array.isArray(array)) {
		throw new Error('The provided parameter is not an array');
	}

	if (array.length === 0) {
		throw new Error('The provided array is empty');
	}

	if (array.length === 1) {
		throw new Error('The provided array only contains one element');
	}

	if (array.some((number) => typeof number !== 'number')) {
		throw new Error('The provided array contains an element that is not a number');
	}

	const result = [];

	for (number of array) {
		const newArr = array.filter((value) => value !== number);
		let res = 0;
		for (newNumber of newArr) {
			if (!res) {
				res += newNumber;
				continue;
			}
			res *= newNumber;
		}
		result.push(res);
	}
	return result;
};
