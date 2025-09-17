const { Queue } = require('../Stack and Queue-Implementation/queue');

describe('Queue', () => {
  test('enqueue node into queue', () => {
    const q = new Queue();
    q.enqueue(10);
    expect(q.peek().data).toBe(10);
  });

  test('dequeue node from queue', () => {
    const q = new Queue();
    q.enqueue(10);
    q.enqueue(20);
    const removed = q.dequeue();
    expect(removed.data).toBe(10);
    expect(q.peek().data).toBe(20);
  });

  test('isEmpty works', () => {
    const q = new Queue();
    expect(q.isEmpty()).toBe(true);
    q.enqueue(1);
    expect(q.isEmpty()).toBe(false);
    q.dequeue();
    expect(q.isEmpty()).toBe(true);
  });
});