const { areBracketsBalanced } = require('./solution')

describe('areBracketsBalanced', () => {
it('should return true if brackets are balanced', () => {
	expect(areBracketsBalanced('()[{}]()')).toBe(true)
});

it('should return false if brackets are unbalanced', () => {
	expect(areBracketsBalanced('()[{}]({})}')).toBe(false)
});

 })
