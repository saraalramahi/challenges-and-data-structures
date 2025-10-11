
// const TNode = require('./tnode');
// const BinaryTree = require('./binaryTree');
// const BinarySearchTree = require('./binarySearchTree');

// function demoBinaryTree() {
//   // بناء شجرة تجريبية:
//   //      A
//   //     / \
//   //    B   C
//   //   / \   \
//   //  D   E   F
//   const root = new TNode('A');
//   root.left = new TNode('B');
//   root.right = new TNode('C');
//   root.left.left = new TNode('D');
//   root.left.right = new TNode('E');
//   root.right.right = new TNode('F');

//   const bt = new BinaryTree(root);
//   console.log('Binary Tree print:');
//   bt.print();

//   console.log('PreOrder:', bt.preOrder());   // A,B,D,E,C,F
//   console.log('InOrder :', bt.inOrder());    // D,B,E,A,C,F
//   console.log('PostOrder:', bt.postOrder()); // D,E,B,F,C,A
// }

// function demoBST() {
//   const bst = new (require('./binarySearchTree'))();
//   bst.add(10);
//   bst.add(5);
//   bst.add(15);
//   bst.add(7);
//   bst.add(3);
//   console.log('\nBinary Search Tree demo:');
//   console.log('contains(7):', bst.contains(7)); // true
//   console.log('contains(4):', bst.contains(4)); // false
//   bst.remove(5);
//   console.log('after remove(5) contains(5):', bst.contains(5)); // false
// }

// try {
//   demoBinaryTree();
//   demoBST();
// } catch (err) {
//   console.error('Error during demo:', err.message);
// }

const BinaryTree = require('./binaryTree');
const BinarySearchTree = require('./binarySearchTree');
const TNode = require('./tnode');

function demoBinaryTree() {
  const n1 = new TNode(1);
  const n2 = new TNode(2);
  const n3 = new TNode(3);
  const n4 = new TNode(4);
  const n5 = new TNode(5);
  const n6 = new TNode(6);

  n1.left = n2;
  n1.right = n3;
  n2.left = n4;
  n2.right = n5;
  n3.right = n6;

  const bt = new BinaryTree(n1);

  console.log('*** Binary Tree Demo ***');
  console.log('PreOrder:', bt.PreOrder());   // [1,2,4,5,3,6]
  console.log('InOrder:', bt.InOrder());     // [4,2,5,1,3,6]
  console.log('PostOrder:', bt.PostOrder()); // [4,5,2,6,3,1]
  console.log('\nPrint tree (visual):');
  bt.Print();
}

function demoBST() {
  const bst = new BinarySearchTree();
  bst.Add(10);
  bst.Add(5);
  bst.Add(15);
  bst.Add(7);

  console.log('\n*** Binary Search Tree Demo ***');
  console.log('Contains 7?', bst.Contains(7)); // true
  console.log('Contains 5?', bst.Contains(5)); // true

  console.log('Removing 5...');
  bst.Remove(5);
  console.log('Contains 5?', bst.Contains(5)); // false
}

try {
  demoBinaryTree();
  demoBST();
} catch (e) {
  console.error('Demo error:', e);
}