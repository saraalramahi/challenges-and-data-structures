const { Node, BinaryTree } = require('../LeafSum/leafsum');

test('sum of leaf nodes using provided example', () => {
  const tree = new BinaryTree();
  tree.root = new Node(9);
  tree.root.left = new Node(8);
  tree.root.right = new Node(12);
  tree.root.left.left = new Node(3);
  tree.root.left.right = new Node(7);
  tree.root.right.left = new Node(17);
  tree.root.right.right = new Node(23);
  tree.root.left.left.right = new Node(4);

  expect(tree.sumOfLeafNodes()).toBe(51);
});

test('sum with negative leaf values', () => {
  const tree = new BinaryTree();
  tree.root = new Node(1);
  tree.root.left = new Node(-5);
  tree.root.right = new Node(10);
  tree.root.right.left = new Node(-3);
  tree.root.right.right = new Node(2);

  expect(tree.sumOfLeafNodes()).toBe(-6);
});
