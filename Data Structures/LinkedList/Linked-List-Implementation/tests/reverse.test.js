 "use strict";

const  LinkedList  = require('../LinkedList');

describe('Reverse Linked List', () => {
  test('reverses a non-empty list (1->2->3 => 3->2->1)', () => {
    const list = new LinkedList();
    list.append(1).append(2).append(3);
    list.reverse();
    expect(list.toArray()).toEqual([3,2,1]);
  });

  test('single-node list stays the same', () => {
    const list = new LinkedList();
    list.append(10);
    list.reverse();
    expect(list.toArray()).toEqual([10]);
  });

  test('empty list returns null and head remains null', () => {
    const list = new LinkedList();
    const res = list.reverse();
    expect(res).toBeNull();
    expect(list.head).toBeNull();
  });

  test('duplicates preserved and reversed (1->2->2->3 => 3->2->2->1)', () => {
    const list = new LinkedList();
    list.append(1).append(2).append(2).append(3);
    list.reverse();
    expect(list.toArray()).toEqual([3,2,2,1]);
  });

  test('printList on empty list prints "Head -> null"', () => {
    const list = new LinkedList();
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const out = list.printList();
    expect(out).toBe('Head ----> null');
    expect(spy).toHaveBeenCalledWith('Head ----> null');
    spy.mockRestore();
  });

  test('printList on non-empty list prints correctly', () => {
    const list = new LinkedList();
    list.append(1).append(2).append(3);
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const out = list.printList();
    expect(out).toBe('Head ----> 1 ----> 2 ----> 3 ----> null');
    expect(spy).toHaveBeenCalledWith('Head ----> 1 ----> 2 ----> 3 ----> null');
    spy.mockRestore();
  });
});


