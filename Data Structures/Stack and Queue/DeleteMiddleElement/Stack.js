"use strict ;"

class Stack {
  constructor() {
    this.items = []; // bottom -> ... -> top (end)
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.isEmpty() ? null : this.items.pop();
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  // مفيد للاختبارات / الطباعة: يعيد المصفوفة من bottom -> top
  toArray() {
    return [...this.items];
  }

  // طباعة بترتيب القمة أولاً (للمخرجات)
  toString() {
    if (this.isEmpty()) return 'Stack: Top ---> (empty)';
    const topToBottom = [...this.items].reverse().map(x => String(x)).join(' -> ');
    return `Stack: Top ---> ${topToBottom}`;
  }
}

module.exports = Stack;
