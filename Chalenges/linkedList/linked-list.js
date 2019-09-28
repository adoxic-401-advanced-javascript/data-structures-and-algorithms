class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  includes(data) {
    let currentNode = this.head;
    while(currentNode !== null) {
      if(currentNode.data === data) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
  toString() {
    if(this.head == null) return '';
    let values = this.head.data;
    let current = this.head.next;
    while(current !== null) {
      values += `, ${current.data}`;
      current = current.next;
    }
    return values;
  }
}

module.exports = {
  Node,
  LinkedList,
};