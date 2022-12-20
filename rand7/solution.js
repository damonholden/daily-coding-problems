function rand5() {
	return Math.ceil(Math.random() * 5);
}

function rand7() {
	let result = 0;

	const values = [
		[1, 2, 3, 4, 5],
		[6, 7, 1, 2, 3],
		[4, 5, 6, 7, 1],
		[2, 3, 4, 5, 6],
		[7, 0, 0, 0, 0],
	];

	while (result === 0) {
		result = values[rand5() - 1][rand5() - 1];
	}

	return result;
}

module.exports = {rand7}
