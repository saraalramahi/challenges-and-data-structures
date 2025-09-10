"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  display() {
    let current = this.head;
    let result = "Head -> ";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    result += "Null";
    console.log(result);
    return result;
  }

  rotateLeft(k) {
    if (!this.head || k === 0) return;

    // 1) حساب الطول
    let length = 1;
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      length++;
    }

    // 2) تعديل قيمة k إذا أكبر من الطول
    k = k % length;
    if (k === 0) return;

    // 3) لو k سالب → دوران لليمين
    if (k < 0) {
      k = length + k; // مثال: k=-2, length=6 → k=4
    }

    // 4) توصيل آخر عنصر بالرأس (عمل دائرة)
    tail.next = this.head;

    // 5) إيجاد tail الجديد
    let newTail = this.head;
    for (let i = 1; i < k; i++) {
      newTail = newTail.next;
    }

    // 6) تحديث الرأس
    this.head = newTail.next;
    newTail.next = null;
  }
}

module.exports = { Node, LinkedList };