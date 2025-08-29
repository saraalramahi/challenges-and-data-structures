 "use strict ";
const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Append node at end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    return this;
  }

  // Insert at specific index
  insertAt(value, index) {
    if (index < 0 || index > this.length) throw new RangeError('Index out of bounds');
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = newNode;
      newNode.next = current;
    }
    this.length++;
  }

  // Remove node by value
  remove(value) {
    if (!this.head) return false;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return true;
    }
    let current = this.head;
    let prev = null;
    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }
    if (!current) return false;
    prev.next = current.next;
    this.length--;
    return true;
  }

  // Check if value exists
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  // Reverse the linked list
  reverse() {
    if (!this.head) return null;
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

   printList()
 {
     let curr=this.head;

     let values=[];//empty array
     while (curr!==null) {
         values.push(curr.value);
         curr=curr.next;
     }
     console.log("Head ---->",values.join(" ----> "),"---->Null");
    return ;
 }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

module.exports = LinkedList ;
