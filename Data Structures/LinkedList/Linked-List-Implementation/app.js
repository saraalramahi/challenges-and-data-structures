
"use strict";

// استيراد LinkedList الأساسي
const LinkedList = require("./LinkedList");

// استيراد LinkedList من rotateLinkedList (نفس الكلاس لكن بخاصية الدوران)
const { LinkedList: RotateList } = require("./rotateLinkedList/rotateLinkedList");


// ----------------------
// 1. تجارب LinkedList العادي
// ----------------------
const list = new LinkedList();

list.append(5);
list.append(10);
list.append(20);
list.append(30);

list.printList(); // Head -> 5 -> 10 -> 20 -> 30 -> null

list.remove(10);
list.printList(); // Head -> 5 -> 20 -> 30 -> null

console.log("includes(20):", list.includes(20)); // true
console.log("includes(10):", list.includes(10)); // false

list.insertAt(15, 2);
list.printList(); // Head -> 5 -> 20 -> 15 -> 30 -> null

const empty = new LinkedList();
empty.printList(); // Head -> null
console.log("remove from empty:", empty.remove(999)); // false

try {
  list.insertAt(999, 100); // خطأ
} catch (e) {
  console.error("Error inserting at invalid index:", e.message);
}



// ----------------------
// 2. تجارب Merge Sorted Lists
// ----------------------
function demo(title, arr1, arr2) {
  const list1 = LinkedList.fromArray(arr1);
  const list2 = LinkedList.fromArray(arr2);
  const merged = LinkedList.mergeSortedLists(list1, list2);

  console.log("\n~~ " + title + " ~~");
  console.log("List 1:", list1.toArray());
  console.log("List 2:", list2.toArray());
  console.log("Merged:", merged ? merged.toArray() : "null");
}

demo("Example 1", [1, 3, 5], [2, 4, 6]);
demo("Example 2", [5, 10, 15], [2, 3, 20]);
demo("Example 3", [10, 20, 30], [5, 15, 25, 35]);

demo("Edge: one empty", [], [1, 2, 3]);
demo("Edge: both empty", [], []);


// ----------------------
// 3. تجارب Rotate LinkedList
// ----------------------
const rotateList = new RotateList();
[1, 2, 3, 4, 5, 6].forEach(num => rotateList.insert(num));

console.log("\nInput :");
rotateList.display();

rotateList.rotateLeft(2);
console.log("Output :K=2");
rotateList.display();

const list2 = new RotateList();
[10, 20, 30, 40, 50].forEach(num => list2.insert(num));

console.log("\nInput :");
list2.display();
list2.rotateLeft(3);
console.log("Output :K=3");
list2.display();

// مثال: 5 -> 10 -> 15 -> 20, k=1
const list3 = new RotateList();
[5, 10, 15, 20].forEach(num => list3.insert(num));

console.log("\nInput :"); 
list3.display();
list3.rotateLeft(1);
console.log("Output :K=1");
list3.display();

