const createArrayOfProductsPfProvidedArray = (arr) => {
	if (!Array.isArray(arr)) {
		throw new Error('The provided parameter is not an array');
	}

	if (arr.length === 0) {
		throw new Error('The provided array is empty');
	}

	if (arr.length === 1) {
		throw new Error('The provided array only contains one element');
	}

	if (arr.some((number) => typeof number !== 'number')) {
		throw new Error('The provided array contains an element that is not a number');
	}

  const result = [];

  for (number of arr) {
    const newArr = arr.filter((value) => value !== number);
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

module.exports = createArrayOfProductsPfProvidedArray;
