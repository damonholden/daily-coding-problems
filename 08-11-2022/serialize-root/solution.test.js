const serialize = require('./solution')
const deserialize = require('./solution')
const node = require('./node')

describe('deserialize', () => {
	it('should deserialize a serialized object', () => {
			expect(deserialize(serialize(node)).left.left.val).toBe('left.left')
	})
});
