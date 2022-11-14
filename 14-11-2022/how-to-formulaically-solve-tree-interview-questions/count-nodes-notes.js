const {Node, tree} = require('./node')

const countTotalNumberOfNodes = (node) => {
  if (node instanceof Node) {
    return (
      countTotalNumberOfNodes(node.left) +
      countTotalNumberOfNodes(node.right) +
      1
    );
  }
  return 0;
};

countTotalNumberOfNodes(tree);
