"use strict ;"

const LinkedList  = require('./LinkedList');

const list = new LinkedList();


list.append(5);
list.append(10);
list.append(20);
list.append(30);

list.printList(); // Head -> 5 -> 10 -> 20 -> 30 -> null

list.remove(10);
list.printList(); // Head -> 5 -> 20 -> 30 -> null

console.log('includes(20):', list.includes(20)); // true
console.log('includes(10):', list.includes(10)); // false

list.insertAt(15, 2);
list.printList(); // Head -> 5 -> 20 -> 15 -> 30 -> null (ملاحظة: حسب المثال، بس عندنا بعد الإزالة صار 5 -> 20 -> 30، إدخال 15 عند 2 يعطي 5 -> 20 -> 15 -> 30)

const empty = new LinkedList();
empty.printList(); // Head -> null
console.log('remove from empty:', empty.remove(999)); // false

try {
  list.insertAt(999, 100); // خطأ
} catch (e) {
  console.error('Error inserting at invalid index:', e.message);
}