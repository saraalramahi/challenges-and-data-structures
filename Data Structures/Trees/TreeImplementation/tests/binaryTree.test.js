const BinaryTree = require('../src/binaryTree');
const TNode = require('../src/tnode');

describe('BinaryTree traversals', () => {
  let tree;
  beforeEach(() => {
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

    tree = new BinaryTree(n1);
  });

  test('pre-order traversal', () => {
    expect(tree.PreOrder()).toEqual([1,2,4,5,3,6]);
  });

  test('in-order traversal', () => {
    expect(tree.InOrder()).toEqual([4,2,5,1,3,6]);
  });

  test('post-order traversal', () => {
    expect(tree.PostOrder()).toEqual([4,5,2,6,3,1]);
  });
});