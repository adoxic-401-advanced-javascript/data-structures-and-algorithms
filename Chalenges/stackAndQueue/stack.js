class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.stack = null;
  }

  push(info) {
    const head = this.stack;
    const newNode = new Node(info, null);

    if(!head) {
      this.stack = newNode;
    } else {
      newNode.next = head;
      this.stack = newNode;
    }
  }

  pop() {
    const head = this.stack;

    if(!head) {
      return 'this is an empty stack';
    }

    this.stack = head.next;
    return head.value;
  }

  peek() {
    const head = this.stack;

    if(!head) {
      return 'this is an empty stack';
    }

    return head.value;
  }

}

module.exports = Stack;