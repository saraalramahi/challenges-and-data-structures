const BinarySearchTree = require('../src/binarySearchTree');

describe('BinarySearchTree basic ops', () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('add and contains', () => {
    bst.Add(10);
    bst.Add(5);
    bst.Add(15);
    bst.Add(7);
    expect(bst.Contains(7)).toBe(true);
    expect(bst.Contains(999)).toBe(false);
  });

  test('remove node', () => {
    bst.Add(10);
    bst.Add(5);
    bst.Add(15);
    bst.Remove(5);
    expect(bst.Contains(5)).toBe(false);
  });
});