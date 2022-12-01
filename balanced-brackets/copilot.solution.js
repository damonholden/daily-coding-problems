const bracketsBalancedTest = (str) => {
	let stack = [];
	let brackets = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (brackets[char]) {
			stack.push(char);
		} else if (char === '}' || char === ']' || char === ')') {
			if (brackets[stack.pop()] !== char) return false;
		}
	}

	return stack.length === 0;
}
