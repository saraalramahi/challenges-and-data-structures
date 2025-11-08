class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  sumOfLeafNodes() {
    try {
      if (this.root === null) return 0;
      return this._sumLeavesHelper(this.root);
    } catch (err) {
      console.error('Error calculating leaf sum:', err);
      throw err;
    }
  }

  _sumLeavesHelper(node) {
    if (!node) return 0;

    const isLeaf = (node.left === null && node.right === null);
    if (isLeaf) {
      const val = Number(node.value);
      if (Number.isNaN(val)) {
        throw new TypeError(`Node value is not a number: ${node.value}`);
      }
      return val;
    }

    return this._sumLeavesHelper(node.left) + this._sumLeavesHelper(node.right);
  }
}

module.exports = { Node, BinaryTree };
