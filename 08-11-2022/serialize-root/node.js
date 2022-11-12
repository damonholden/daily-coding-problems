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

module.exports = { Node, node };
