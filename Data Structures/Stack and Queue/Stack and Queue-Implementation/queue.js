"use strict ";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.front) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (!this.front) return null;
    const removed = this.front;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    removed.next = null;
    return removed; // return node
  }

  peek() {
    return this.front; // returns the front node or null
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = { Queue, Node };