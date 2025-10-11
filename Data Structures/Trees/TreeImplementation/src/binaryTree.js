// const TNode = require('./tnode');

// class BinaryTree {
//   constructor(root = null) {
//     this.root = root;
//   }

//   // PreOrder: Root, Left, Right
//   preOrder() {
//     const result = [];
//     function traverse(node) {
//       if (!node) return;
//       result.push(node.data);
//       traverse(node.left);
//       traverse(node.right);
//     }
//     traverse(this.root);
//     return result;
//   }

//   // InOrder: Left, Root, Right
//   inOrder() {
//     const result = [];
//     function traverse(node) {
//       if (!node) return;
//       traverse(node.left);
//       result.push(node.data);
//       traverse(node.right);
//     }
//     traverse(this.root);
//     return result;
//   }

//   // PostOrder: Left, Right, Root
//   postOrder() {
//     const result = [];
//     function traverse(node) {
//       if (!node) return;
//       traverse(node.left);
//       traverse(node.right);
//       result.push(node.data);
//     }
//     traverse(this.root);
//     return result;
//   }

//   // Print: pretty-print the tree in console (rotated)
//   print() {
//     // Helper: recursively build lines
//     function buildString(node, prefix = '', isLeft = true) {
//       if (!node) return prefix + '⎯⎯ null\n';
//       let str = prefix + (isLeft ? '├─ ' : '└─ ') + node.data + '\n';
//       const childPrefix = prefix + (isLeft ? '│  ' : '   ');
//       if (!node.left && !node.right) return str;
//       if (node.left) str += buildString(node.left, childPrefix, true);
//       else str += childPrefix + '├─ null\n';
//       if (node.right) str += buildString(node.right, childPrefix, false);
//       else str += childPrefix + '└─ null\n';
//       return str;
//     }

//     if (!this.root) {
//       console.log('(empty tree)');
//       return;
//     }
//     const header = this.root.data + '\n';
//     const leftStr = this.root.left ? buildString(this.root.left, '', true) : '├─ null\n';
//     const rightStr = this.root.right ? buildString(this.root.right, '', false) : '└─ null\n';
//     console.log(header + leftStr + rightStr);
//   }
// }

// module.exports = BinaryTree;
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