const Node = require('./node');
const node = require('./node');

const checkUndefined = (value) => {
  if (typeof value === 'undefined') {
    return '';
  }

  return value;
};

const serialize = (someNode, l = '<', r = '>') => {
  let valSymbol = '~';

  let result = '';

  const { val, left, right } = someNode;

  result += `${valSymbol}${val}`;
  result += `${l}:${
    left instanceof Node
      ? serialize(left, l + '<', r + '>')
      : checkUndefined(right)
  }`;
  result += `${r}:${
    right instanceof Node
      ? serialize(right, l + '<', r + '>')
      : checkUndefined(right)
  }`;

  return result;
};

const deserialize = (serializedNode, l = '<', r = '>') => {
  serializedNode;
  let val;
  let left;
  let right;
  for (let i = 0; i < serializedNode.length; i++) {
    if (serializedNode[i] === '~') {
      val = serializedNode.slice(i + 1, serializedNode.indexOf('<'));
      i = serializedNode.indexOf('<', i) - 1;
      continue;
    }

    if (serializedNode[i] === '<') {
      if (serializedNode[i + 1] === '~') {
        // left = deserialize()
      }
    }
  }

  return new Node(val, left, right);
};

//Quokka test
deserialize(serialize(node));

module.exports = {serialize, deserialize}
