// MinStack.js
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    // إذا كانت minStack فارغة أو القيمة أصغر أو مساوية لأحدث minimum فندخلها
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.stack.length === 0) return null;
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return val;
  }

  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getMin() {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
  }

  printStack() {
    if (this.stack.length === 0) {
      console.log('Top ---> null');
      return 'Top ---> null';
    }
    let res = 'Top';
    for (let i = this.stack.length - 1; i >= 0; i--) {
      res += ' ---> ' + this.stack[i];
    }
    console.log(res);
    return res;
  }
}

module.exports = MinStack;