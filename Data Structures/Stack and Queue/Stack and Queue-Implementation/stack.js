class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) return null;
    const popped = this.top;
    this.top = this.top.next;
    popped.next = null;
    return popped;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }
}

module.exports = { Stack, Node };