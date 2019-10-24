class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.queue = null;
  }

  enqueue(info) {
    let head = this.queue;
    let newNode = new Node(info, null);

    if(!head) {
      this.queue = newNode;
    } else {
      let travel = head;
      while(travel.next !== null) {
        travel = travel.next;
      }
      travel.next = newNode;
    }
  }
  dequeue() {
    let head = this.queue;
    if(!head) {
      return 'this queue is empty';
    }
    this.queue = head.next;
    return head.value;
  }
  peek() {
    let head = this.queue;
    if(!head) {
      return 'this queue is empty';
    }
    return head.value;
  }
}

module.exports = Queue;