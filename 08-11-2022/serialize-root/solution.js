const util = require('util')

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const node = new Node(
  'root',
  new Node('left', new Node('left.left')),
  new Node('right')
);

const checkUndefined = (value) => {
	if (typeof value === 'undefined') {
		return ''
	}

	return value
}


const serialize = (someNode, l = '', r = '') => {
	let valSymbol = '~'
	let leftSymbol = l
	let rightSymbol = r

	let result = '';

	const {val, left, right} = someNode;

	result += `${valSymbol}${val}`;
	result += `${leftSymbol += '<'}${left instanceof Node ? serialize(left, rightSymbol, leftSymbol) : checkUndefined(right)}`
	result += `${rightSymbol += '>'}${right instanceof Node ? serialize(right, rightSymbol, leftSymbol) : checkUndefined(right)}`

	return result;
}

const deserialize = (serializedNode) => {
	serializedNode
	let val
	let left
	let right
for (let i = 0; i < serializedNode.length; i++) {
	if (serializedNode[i] === '~') {
		val = serializedNode.slice(i + 1, serializedNode.indexOf('<'))
		i = serializedNode.indexOf('<', i) - 1
		continue
	}

	if (serializedNode[i] === '<') {
		if (serializedNode[i + 1] === '~') {
// left = deserialize()
		}
	}

}

return new Node(val, left, right)
}

deserialize(serialize(node));

// console.log(util.inspect(node, {depth: null}));

module.exports = serialize;
module.exports = deserialize;
