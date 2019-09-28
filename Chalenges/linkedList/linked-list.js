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
    let data = this.head.data;
    let current = this.head.next;
    while(current !== null) {
      data += `, ${current.data}`;
      current = current.next;
    }
    return data;
  }
  append(data) {
    const newNode = new Node(data);
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.size++;
  }
  insertBefore(target, data) {
    if(this.head.data === target) this.head.insert(data);

    while(this.head.next.data !== target) {
      this.head = this.head.next;
    }

    const node = new Node(data);
    node.next = this.head.next;
    this.head.next = node;
    this.size++;
  }
  insertAfter(target, data) {
    while(this.head.data !== target) {
      this.head = this.head.next;
    }

    const node = new Node(data);
    node.next = this.head.next;
    this.head.next = node;
    this.size++;
  }
}

module.exports = {
  Node,
  LinkedList,
};