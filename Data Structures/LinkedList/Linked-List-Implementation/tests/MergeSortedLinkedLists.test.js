// tests/MergeSortedLinkedLists.test.js
"use strict ";
const LinkedList  = require("../LinkedList"); 

describe("mergeSortedLists", () => {
  test("one list is empty -> return the non-empty list", () => {
    const l1 = LinkedList.fromArray([]);
    const l2 = LinkedList.fromArray([1, 3, 5]);
    const merged = LinkedList.mergeSortedLists(l1, l2);
    expect(merged.toArray()).toEqual([1, 3, 5]);
  });

  test("both lists are empty -> return null", () => {
    const l1 = LinkedList.fromArray([]);
    const l2 = LinkedList.fromArray([]);
    const merged = LinkedList.mergeSortedLists(l1, l2);
    expect(merged).toBeNull();
  });

  test("merge example 2: [5,10,15] with [2,3,20]", () => {
    const l1 = LinkedList.fromArray([5, 10, 15]);
    const l2 = LinkedList.fromArray([2, 3, 20]);
    const merged = LinkedList.mergeSortedLists(l1, l2);
    expect(merged.toArray()).toEqual([2, 3, 5, 10, 15, 20]);
  });

  test("keeps duplicates", () => {
    const l1 = LinkedList.fromArray([1, 2, 2]);
    const l2 = LinkedList.fromArray([2, 2, 3]);
    const merged = LinkedList.mergeSortedLists(l1, l2);
    expect(merged.toArray()).toEqual([1, 2, 2, 2, 2, 3]);
  });
});