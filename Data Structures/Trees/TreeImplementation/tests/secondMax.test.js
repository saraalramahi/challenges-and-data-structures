const BinaryTree = require("../SecondMaxValue/binaryTree");
const Node = require("../SecondMaxValue/node");

describe("Binary Tree - Second Maximum Value", () => {
  test("Example tree returns 20", () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(20);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.left = new Node(15);
    tree.root.right.right = new Node(25);

    expect(tree.findSecondMax()).toBe(20);
  });

  test("Single-node tree throws error", () => {
    const tree = new BinaryTree();
    tree.root = new Node(5);
    expect(() => tree.findSecondMax()).toThrow("Tree must have at least two unique values");
  });

  test("Tree with negative values", () => {
    const tree = new BinaryTree();
    tree.root = new Node(-10);
    tree.root.left = new Node(-20);
    tree.root.right = new Node(-5);
    // max = -5, second = -10
    expect(tree.findSecondMax()).toBe(-10);
  });

  test("Tree with duplicate values only throws error", () => {
    const tree = new BinaryTree();
    tree.root = new Node(7);
    tree.root.left = new Node(7);
    tree.root.right = new Node(7);
    expect(() => tree.findSecondMax()).toThrow("Tree must have at least two unique values");
  });

  test("Tree with max duplicates but another value", () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(10);
    tree.root.right = new Node(5);
    // max = 10, second = 5
    expect(tree.findSecondMax()).toBe(5);
  });
});
