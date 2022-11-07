const doAnyTwoNumbersAddUpToTarget = (arr, target) => {

	if (!Array.isArray(arr)) {
		throw new Error('First parameter must be an array');
	}

	if (typeof target !== 'number') {
		throw new Error('Second parameter must be a number');
	}

  const pairs = [];
  for (let number of arr) {
    filteredArr = arr.filter((num) => num !== number);
    for (let anotherNumber of filteredArr)
      if (number + anotherNumber === target) {
        if (!pairs.length) {
          pairs.push([number, anotherNumber]);
        }
        if (
          pairs.every(
            (pair) =>
              !pair.every((test) => test === number || test === anotherNumber)
          )
        ) {
          pairs.push([number, anotherNumber]);
        }
      }
  }

  return pairs;
};

module.exports = doAnyTwoNumbersAddUpToTarget;
