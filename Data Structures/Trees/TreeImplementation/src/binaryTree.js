
const TNode = require('./tnode');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  PreOrder() {
    const result = [];
    try {
      const traverse = (node) => {
        if (!node) return;
        result.push(node.data);
        traverse(node.left);
        traverse(node.right);
      };
      traverse(this.root);
      return result;
    } catch (e) {
      console.error('PreOrder error:', e);
      return [];
    }
  }

  InOrder() {
    const result = [];
    try {
      const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        result.push(node.data);
        traverse(node.right);
      };
      traverse(this.root);
      return result;
    } catch (e) {
      console.error('InOrder error:', e);
      return [];
    }
  }

  PostOrder() {
    const result = [];
    try {
      const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        result.push(node.data);
      };
      traverse(this.root);
      return result;
    } catch (e) {
      console.error('PostOrder error:', e);
      return [];
    }
  }

  Print() {
    try {
      const printNode = (node, prefix = '', isLeft = true) => {
        if (!node) return;
        if (node.right) {
          printNode(node.right, prefix + (isLeft ? '│   ' : '    '), false);
        }
        console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.data);
        if (node.left) {
          printNode(node.left, prefix + (isLeft ? '    ' : '│   '), true);
        }
      };

      if (!this.root) {
        console.log('(empty tree)');
        return;
      }
      printNode(this.root);
    } catch (e) {
      console.error('Print error:', e);
    }
  }
}

module.exports = BinaryTree;