const {Node, tree} = require('./node')

const incrementDepth = (node, depth) => {
	return [node, depth++]
}

const getDeepestNode = (node) => {
  depth = 1;
  if (
    node instanceof Node &&
    !node.left instanceof Node &&
    !node.right instanceof Node
  ) {
		return [node, 1]
  }

	if (!node.left instanceof Node) {
		return incrementDepth(getDeepestNode(node.right))
	} else if (!node.right instanceof Node) {
		return incrementDepth(getDeepestNode(node.left))
	}

	return incrementDepth(
		Math.max(getDeepestNode(node.left), getDeepestNode(node.right))
	)
}

getDeepestNode(tree)
