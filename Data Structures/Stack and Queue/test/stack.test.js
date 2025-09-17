const { Stack } = require('../Stack and Queue-Implementation/stack');

describe('Stack', () => {
  test('push node onto stack', () => {
    const stack = new Stack();
    stack.push(10);
    expect(stack.peek().data).toBe(10);
  });

  test('pop node from stack', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    const popped = stack.pop();
    expect(popped.data).toBe(20);
    expect(stack.peek().data).toBe(10);
  });

  test('isEmpty works', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});