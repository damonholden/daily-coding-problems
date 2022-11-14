class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tree = new Node(
  'root',
  new Node('left', 'left.left', 'left.right'),
  new Node(
    'right',
    new Node('right.left', 'right.left.left', 'right.left.rigth'),
    'right.right'
  )
);

module.exports = {Node, tree};
