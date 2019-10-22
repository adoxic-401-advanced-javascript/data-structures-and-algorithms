const PseudoQueue = require('../queueWithStacks/queue-with-stacks');

describe('fake queue', () => {
  it('add stuff queue style', () => {
    const fakeQ = new PseudoQueue();
    fakeQ.enqueue('first');
    fakeQ.enqueue('second');

    expect(fakeQ.inStack.stack.next.value).toBe('first');
    expect(fakeQ.inStack.stack.value).toBe('second');
  });

  it('remove stuff queue style', () => {
    const fakeQ = new PseudoQueue();
    fakeQ.enqueue('first');
    fakeQ.enqueue('second');
    const first = fakeQ.dequeue();
    const second = fakeQ.dequeue();
    const empty = fakeQ.dequeue();

    expect(first).toBe('first');
    expect(second).toBe('second');
    expect(empty).toBe('this is an empty stack');
  });
});