"use strict";

const  {LinkedList} = require("../rotateLinkedList/rotateLinkedList");

describe("RotateLinkedList Tests", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });
//k=0
  test("Rotate by k=0 should remain unchanged", () => {
    [1, 2, 3, 4, 5].forEach(num => list.insert(num));
    list.rotateLeft(0);
    let result = [];
    let current = list.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
//k>
  test("Rotate by k>length should rotate by k%length", () => {
    [1, 2, 3, 4, 5, 6].forEach(num => list.insert(num));
    list.rotateLeft(7); // 7 % 6 = 1
    let result = [];
    let current = list.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    expect(result).toEqual([2, 3, 4, 5, 6, 1]);
  });
//k=+
  test("Rotate by k positive", () => {
    [1, 2, 3, 4, 5, 6].forEach(num => list.insert(num));
    list.rotateLeft(2);
    let result = [];
    let current = list.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    expect(result).toEqual([3, 4, 5, 6, 1, 2]);
  });
//k=-
  test("Rotate by k negative", () => {
    [1, 2, 3, 4, 5, 6].forEach(num => list.insert(num));
    list.rotateLeft(-2);
    let result = [];
    let current = list.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    expect(result).toEqual([5, 6, 1, 2, 3, 4]);
  });

  test("Rotate single element list", () => {
    list.insert(1);
    list.rotateLeft(3);
    expect(list.head.value).toBe(1);
    expect(list.head.next).toBeNull();
  });

  test("Rotate empty list", () => {
    list.rotateLeft(5);
    expect(list.head).toBeNull();
  });
});