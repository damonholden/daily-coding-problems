const cons = (a, b) => {
	const pair = (f) => {
		return f(a, b)
	}
	return pair
}
