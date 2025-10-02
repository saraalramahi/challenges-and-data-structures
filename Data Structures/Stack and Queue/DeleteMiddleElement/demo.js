"use strict ;"


const StackWithDeleteMiddle = require('./StackWithDeleteMiddle');

const stack = new StackWithDeleteMiddle();
stack.push(7);
stack.push(14);
stack.push(3);
stack.push(8);
stack.push(5);

console.log('Initial stack:');
console.log(stack.toString()); // Stack: Top -> 5 -> 8 -> 3 -> 14 -> 7

console.log('\nDeleted middle element:', stack.deleteMiddle()); // 3
console.log('Stack after deleting middle:');
console.log(stack.toString()); // Stack: Top -> 5 -> 8 -> 14 -> 7

// نضيف عناصر أخرى
stack.push(2);
stack.push(9);
stack.push(11);
console.log('\nStack after pushing 2, 9, 11:');
console.log(stack.toString()); // Top -> 11 -> 9 -> 2 -> 5 -> 8 -> 14 -> 7

console.log('\nDeleted middle element:', stack.deleteMiddle());
console.log('Stack after deleting middle again:');
console.log(stack.toString());
