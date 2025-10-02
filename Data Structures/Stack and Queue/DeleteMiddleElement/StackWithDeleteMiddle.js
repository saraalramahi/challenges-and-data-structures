"use strict ;"

const Stack = require('./Stack');

class StackWithDeleteMiddle extends Stack {
  /**
   * Deletes the middle element and returns it.
   * - If empty: returns null
   * - If size === 1: pops and returns the only element
   * Uses an auxiliary stack to hold popped elements while reaching middle.
   */
  deleteMiddle() {
    const n = this.size();
    if (n === 0) return null;
    if (n === 1) return this.pop();

    // تحديد موضع العنصر الأوسط (index من الأسفل، 0-based)
    const middle = (n % 2 === 0) ? (n / 2 - 1) : Math.floor(n / 2);

    // عدد عناصر يجب أن نخرجها من القمة حتى يصبح العنصر الأوسط في القمة
    const popsNeeded = n - 1 - middle;

    const temp = new Stack();
    for (let i = 0; i < popsNeeded; i++) {
      temp.push(this.pop());
    }

    // الآن القمة هي العنصر الأوسط
    const removed = this.pop();

    // إعادة العناصر المحفوظة بنفس الترتيب
    while (!temp.isEmpty()) {
      this.push(temp.pop());
    }

    return removed;
  }
}

module.exports = StackWithDeleteMiddle;

