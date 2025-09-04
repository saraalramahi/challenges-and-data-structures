"use strict";


const LinkedList  = require('../LinkedList');

describe('LinkedList', () => {
  test('appends nodes to the end', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.toString()).toBe('Head -> 5 -> 10 -> 20 -> 30 -> null');
    expect(list.length).toBe(4);
  });

  test('removes a node by value', () => {
    const list = new LinkedList();
    [5, 10, 20, 30].forEach(v => list.append(v));
    const removed = list.remove(10);
    expect(removed).toBe(true);
    expect(list.toString()).toBe('Head -> 5 -> 20 -> 30 -> null');
    expect(list.length).toBe(3);
  });

  test('remove returns false if value not found or list empty', () => {
    const list = new LinkedList();
    expect(list.remove(99)).toBe(false);
    list.append(1);
    expect(list.remove(99)).toBe(false);
  });

  test('includes() works', () => {
    const list = new LinkedList();
    [5, 10, 20, 30].forEach(v => list.append(v));
    expect(list.includes(20)).toBe(true);
    expect(list.includes(10)).toBe(true);
    list.remove(10);
    expect(list.includes(10)).toBe(false);
  });

  test('insertAt inserts at specific index', () => {
    const list = new LinkedList();
    [5, 10, 20, 30].forEach(v => list.append(v));
    list.insertAt(15, 2); // بعد 10 وقبل 20
    expect(list.toString()).toBe('Head -> 5 -> 10 -> 15 -> 20 -> 30 -> null');
    expect(list.length).toBe(5);
  });

  test('insertAt at head (index 0)', () => {
    const list = new LinkedList();
    [10, 20].forEach(v => list.append(v));
    list.insertAt(5, 0);
    expect(list.toString()).toBe('Head -> 5 -> 10 -> 20 -> null');
    expect(list.length).toBe(3);
  });

  test('insertAt throws on index > length', () => {
    const list = new LinkedList();
    [5, 10].forEach(v => list.append(v));
    expect(() => list.insertAt(99, 5)).toThrow(RangeError);
  });

  test('printList on empty list prints "Head ----> null"', () => {
    const list = new LinkedList();
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const out = list.printList();
    expect(out).toBe('Head ----> null');
    expect(spy).toHaveBeenCalledWith('Head ----> null');
    spy.mockRestore();
  });
});

