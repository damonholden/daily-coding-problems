const helper = (digits, n) => {
  if (digits.length === 0 || digits[0] === 0) {
    return 0;
  }

  if (digits.length === 1) {
    return 1;
  }

	// let count = helper(digits, n - 1)

	if (digits)
	// count += helper(digits, n - 2)

	return count
}

const decodeWays = (digits) => helper(digits, digits.length);

module.exports = decodeWays;
