const { Node, BinaryTree } = require('./leafsum');

function printTreeLevels(root) {
  if (!root) return;
  const q = [root];
  while (q.length) {
    const levelSize = q.length;
    const row = [];
    for (let i = 0; i < levelSize; i++) {
      const n = q.shift();
      row.push(String(n.value));
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    console.log(row.join(' '));
  }
}

function getLeafValues(root) {
  const leaves = [];
  function dfs(node) {
    if (!node) return;
    if (!node.left && !node.right) {
      leaves.push(Number(node.value));
      return;
    }
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return leaves;
}

const Btree = new BinaryTree();
Btree.root = new Node(9);
Btree.root.left = new Node(8);
Btree.root.right = new Node(12);
Btree.root.left.left = new Node(3);
Btree.root.left.right = new Node(7);
Btree.root.right.left = new Node(17);
Btree.root.right.right = new Node(23);
Btree.root.left.left.right = new Node(4);

console.log('Tree by levels:');
printTreeLevels(Btree.root);

const leaves = getLeafValues(Btree.root);
console.log('\nLeaf nodes are', leaves.join(', ') );

const leafSum = Btree.sumOfLeafNodes();
console.log('\nSum =',leaves.join(" + ")," =",leafSum);
