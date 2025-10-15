const Node = require("./node");

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Finds second maximum distinct value in the tree
  findSecondMax() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    let max = -Infinity;
    let secondMax = -Infinity;
    const visited = new Set(); // optional, helps with duplicates handling if needed

    const traverse = (node) => {
      if (!node) return;
      const val = node.value;

      // update visited (not strictly necessary but good for clarity)
      if (!visited.has(val)) visited.add(val);

      if (val > max) {
        secondMax = max;
        max = val;
      } else if (val < max && val > secondMax) {
        secondMax = val;
      }

      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);

    // If secondMax is still -Infinity or equals -Infinity, it means no second distinct value
    if (secondMax === -Infinity) {
      throw new Error("Tree must have at least two unique values");
    }

    return secondMax;
  }
}

module.exports = BinaryTree;

