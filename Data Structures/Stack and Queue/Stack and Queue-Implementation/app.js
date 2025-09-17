"use strict ";

const { Stack } = require('./stack');
const { Queue } = require('./queue');

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("---Stack---");

console.log('stack.pop():', stack.pop()?.data); // 30
console.log('stack.peek():', stack.peek()?.data); // 20
console.log('stack.isEmpty():', stack.isEmpty()); // false

stack.pop(); // 20
stack.pop(); // 10
console.log('stack.isEmpty() after pops:', stack.isEmpty()); // true

console.log("---Queue---");

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log('queue.dequeue():', queue.dequeue()?.data); // 10
console.log('queue.peek():', queue.peek()?.data); // 20
console.log('queue.isEmpty():', queue.isEmpty()); // false

queue.dequeue();
queue.dequeue();
console.log('queue.isEmpty() after dequeues:', queue.isEmpty()); // true