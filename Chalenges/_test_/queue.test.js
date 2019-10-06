const Queue = require('../stackAndQueue/queue');

describe('make a queue', () => {

  it('makes empty queue', () => {
    const newQ = new Queue();
  
    expect(newQ.queue).toBe(null);
  });

  it('enqueue', () => {
    const newQ = new Queue();
    newQ.enqueue('tristan');
    newQ.enqueue('isolde');

    expect(newQ.queue.value).toBe('tristan');
    expect(newQ.queue.next.value).toBe('isolde');
  });
  it('dequeue till empty', () => {
    const newQ = new Queue();
    newQ.enqueue('tristan');
    newQ.enqueue('isolde');
    const first = newQ.dequeue();
    const second = newQ.dequeue();
    const empty = newQ.dequeue();

    expect(first).toBe('tristan');
    expect(second).toBe('isolde');
    expect(empty).toBe('this queue is empty');
  });
  it('returns peek', () => {
    const newQ = new Queue();
    newQ.enqueue('tristan');
    const got = newQ.peek();

    expect(got).toBe('tristan');
    expect(newQ.queue.value).toBe('tristan');
  });
});