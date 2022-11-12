const { node } = require('./node');

describe('web-research-solution', () => {
  const { serialize, deserialize } = require('./solution-with-web-research');

  describe('deserialize', () => {
    it('should deserialize a serialized object', () => {
      expect(deserialize(serialize(node)).left.left.val).toBe('left.left');
    });
  });
});

describe('independent solution', () => {
  const { serialize, deserialize } = require('./solution');

	describe('deserialize', () => {
    it('should deserialize a serialized object', () => {
      expect(deserialize(serialize(node)).left.left.val).toBe('left.left');
    });
  });
})
