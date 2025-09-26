// demo.js
const MinStack = require('./MinStack');

const minStack = new MinStack();

minStack.push(15); // Top -> 15 (min: 15)
minStack.push(7);  // Top -> 7 -> 15 (min: 7)
minStack.push(12); // Top -> 12 -> 7 -> 15 (min: 7)
minStack.push(3);  // Top -> 3 -> 12 -> 7 -> 15 (min: 3)

minStack.printStack(); // Top -> 3 -> 12 -> 7 -> 15
console.log('min:', minStack.getMin()); // min: 3

let popped = minStack.pop();
console.log('popped:', popped); // popped: 3

minStack.printStack(); // Top -> 12 -> 7 -> 15
console.log('min:', minStack.getMin()); // min: 7

console.log('top:', minStack.top()); // top: 12

minStack.push(2);
minStack.printStack(); // Top -> 2 -> 12 -> 7 -> 15
console.log('min:', minStack.getMin()); // min: 2

console.log('isEmpty:', minStack.isEmpty()); // isEmpty: false