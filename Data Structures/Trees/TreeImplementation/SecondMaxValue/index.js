// const BinaryTree = require("./binaryTree");
// const Node = require("./node");

// const Btree = new BinaryTree();

// Btree.root = new Node(10);
// Btree.root.left = new Node(5);
// Btree.root.right = new Node(20);
// Btree.root.left.left = new Node(3);
// Btree.root.left.right = new Node(7);
// Btree.root.right.left = new Node(15);
// Btree.root.right.right = new Node(25);

// try {
//   const secondMax = Btree.findSecondMax();
//   console.log("Second Maximum Value:", secondMax);
// } catch (err) {
//   console.error("Error:", err.message);
// }
const BinaryTree = require("./binaryTree");
const Node = require("./node");

const Btree = new BinaryTree();

Btree.root = new Node(10);
Btree.root.left = new Node(5);
Btree.root.right = new Node(20);
Btree.root.left.left = new Node(3);
Btree.root.left.right = new Node(7);
Btree.root.right.left = new Node(15);
Btree.root.right.right = new Node(25);

// 🌳 دالة لطباعة الشجرة مستوى بمستوى (Level Order)
function printTreeByLevel(root) {
  if (!root) {
    console.log("Empty tree");
    return;
  }

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelValues = "";

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelValues += node.value + " ";

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    console.log(levelValues.trim());
  }
}

// 👇 نطبع الشجرة أولاً
printTreeByLevel(Btree.root);

// 🔍 بعدين نطبع النتيجة
try {
  const secondMax = Btree.findSecondMax();
  console.log("\nSecond Maximum Value:", secondMax);
} catch (err) {
  console.error("Error:", err.message);
}
