 "use strict ";
const Node = require('./Nod');

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

printList() {
  let result = "Head";
  let current = this.head;

  while (current) {
    result += ` ----> ${current.value}`;
    current = current.next;
  }

  result += " ----> null";
  console.log(result);  // يطبع كمان
  return result;        // أهم شي يرجّع
}
toString() {
  let result = "Head";
  let current = this.head;

  while (current) {
    result += ` -> ${current.value}`;
    current = current.next;
  }

  result += " -> null";
  return result;
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

  // جوّا class LinkedList
static fromArray(arr = []) {
  const list = new LinkedList();
  for (const val of arr) {
    list.append(val);
  }
  return list;
}

static mergeSortedLists(list1, list2) {
  const l1Empty = !list1 || !list1.head;
  const l2Empty = !list2 || !list2.head;

  if (l1Empty && l2Empty) return null;   // إذا القائمتين فاضيات
  if (l1Empty) return list2;             // إذا الأولى فاضية
  if (l2Empty) return list1;             // إذا الثانية فاضية

  let current1 = list1.head;
  let current2 = list2.head;

  const merged = new LinkedList();
  let tail = null;

  const push = (val) => {
    const node = new Node(val);
    if (!merged.head) {
      merged.head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
  };

  while (current1 && current2) {
    if (current1.value <= current2.value) {
      push(current1.value);
      current1 = current1.next;
    } else {
      push(current2.value);
      current2 = current2.next;
    }
  }

  while (current1) {
    push(current1.value);
    current1 = current1.next;
  }
  while (current2) {
    push(current2.value);
    current2 = current2.next;
  }

  return merged;
}
}

module.exports = LinkedList ;
