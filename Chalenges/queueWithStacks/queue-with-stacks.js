const Stack = require('../stackAndQueue/stack');


class PseudoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(val) {
    const node = this.inStack.push(val);
    return node;
  }

  dequeue() {
    if(!this.outStack.stack) {
      if(!this.inStack.stack) return 'this is an empty stack';
      
      let val = this.inStack.pop();
      while(this.inStack.stack) {
        this.outStack.push(val);
        val = this.inStack.pop();
      }
      return val;
    }

    return this.outStack.pop();
  }
}

module.exports = PseudoQueue;