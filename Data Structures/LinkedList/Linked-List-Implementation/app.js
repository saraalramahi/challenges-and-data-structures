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

// MergeSorted/app.js

function demo(title, arr1, arr2) {
  const list1 = LinkedList.fromArray(arr1);
  const list2 = LinkedList.fromArray(arr2);
  const merged = LinkedList.mergeSortedLists(list1, list2);

  console.log("~~~ " + title + " ~~~");
  console.log("List 1:", list1.toArray());
  console.log("List 2:", list2.toArray());
  console.log(
    "Merged:",
    merged ? merged.toArray() : "null"
  );
  console.log();
}

demo("Example 1", [1, 3, 5], [2, 4, 6]);                  // 1 2 3 4 5 6
demo("Example 2", [5, 10, 15], [2, 3, 20]);                // 2 3 5 10 15 20
demo("Example 3", [10, 20, 30], [5, 15, 25, 35]);          // 5 10 15 20 25 30 35

demo("Edge: one empty", [], [1, 2, 3]);                    // 1 2 3
demo("Edge: both empty", [], []);                          // null

