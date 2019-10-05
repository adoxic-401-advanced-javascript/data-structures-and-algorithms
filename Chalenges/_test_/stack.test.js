const Stack = require('../stackAndQueue/stack');

describe('make a stack', () => {

  it('makes empty stack', () => {
    const newStack = new Stack();
    expect(true).toBe(true);
    expect(newStack.stack).toBe(null);
  });

  it('pushed thing on stack', () => {
    const newStack = new Stack();
    newStack.push('thing');
    expect(newStack.stack.value).toBe('thing');
  });

  it('pops off', () => {
    const newStack = new Stack();
    newStack.push('thing1');
    newStack.push('thing2');
    const thing2 = newStack.pop();
    const thing1 = newStack.pop();
    const empty = newStack.pop();

    expect(thing1).toBe('thing1');
    expect(thing2).toBe('thing2');
    expect(empty).toBe('this is an empty stack');
  });

  it('checks a peek', () => {
    const newStack = new Stack();
    newStack.push('thing1');
    newStack.push('thing2');
    const peek = newStack.peek();

    expect(peek).toBe('thing2');
  });
});