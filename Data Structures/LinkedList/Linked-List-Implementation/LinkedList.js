"use strict ;"

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0; 
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.length++;
      return node;
    }
    let current = this.head;
    while (current.next) current = current.next;
    current.next = node;
    this.length++;
    return node;
  }

  includes(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  remove(data) {
    if (!this.head) return false; 
    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return true;
    }
    let prev = this.head;
    let current = this.head.next;
    while (current) {
      if (current.data === data) {
        prev.next = current.next;
        this.length--;
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false; 
  }

  insertAt(data, index) {
    if (typeof index !== 'number' || index < 0 || index > this.length) {
      throw new RangeError(`Index out of bounds: ${index}`);
    }
    const node = new Node(data);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.length++;
      return node;
    }

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) prev = prev.next;
    node.next = prev.next;
    prev.next = node;
    this.length++;
    return node;
  }

  toString() {
    let parts = ['Head'];
    let current = this.head;
    while (current) {
      parts.push(String(current.data));
      current = current.next;
    }
    parts.push('null');
    return parts.join(' -> ');
  }

  printList() {
    const s = this.toString();
    console.log(s);
    return s; 
  }
}

module.exports = {LinkedList };