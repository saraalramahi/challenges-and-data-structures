const TNode = require('./tnode');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  Add(value) {
    try {
      const newNode = new TNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
      let current = this.root;
      while (true) {
        if (value === current.data) return; // تجاهل التكرار
        if (value < current.data) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    } catch (e) {
      console.error('Add error:', e);
    }
  }

  Contains(value) {
    try {
      let current = this.root;
      while (current) {
        if (value === current.data) return true;
        current = value < current.data ? current.left : current.right;
      }
      return false;
    } catch (e) {
      console.error('Contains error:', e);
      return false;
    }
  }

  Remove(value) {
    try {
      const removeNode = (node, value) => {
        if (!node) return null;
        if (value < node.data) {
          node.left = removeNode(node.left, value);
          return node;
        } else if (value > node.data) {
          node.right = removeNode(node.right, value);
          return node;
        } else {
          if (!node.left && !node.right) return null;
          if (!node.left) return node.right;
          if (!node.right) return node.left;
          let minRight = node.right;
          while (minRight.left) minRight = minRight.left;
          node.data = minRight.data;
          node.right = removeNode(node.right, minRight.data);
          return node;
        }
      };

      this.root = removeNode(this.root, value);
    } catch (e) {
      console.error('Remove error:', e);
    }
  }
}

module.exports = BinarySearchTree;