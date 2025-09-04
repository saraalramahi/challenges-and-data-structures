// MergeSorted/mergeSorted.js
"use strict ";
const LinkedList = require("../LinkedList");

function mergeTwoSortedLinkedLists(arr1, arr2) {
  const list1 = LinkedList.fromArray(arr1);
  const list2 = LinkedList.fromArray(arr2);
  const merged = LinkedList.mergeSortedLists(list1, list2);
  return merged ? merged.toArray() : null;
}

module.exports = mergeTwoSortedLinkedLists;