class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(thing) {
    let newNode = new Node(thing, null, null);
    if(this.root === null) {
      this.root = newNode;
      return;
    }
    let traverse = this.root;
    if(thing > traverse.value) {
      while(traverse.right !== null) {
        traverse = traverse.right;
      }
      traverse.right = newNode;
    }
    if(thing < traverse.value) {
      while(traverse.left !== null) {
        traverse = traverse.left;
      }
      traverse.left = newNode;
    }
    if(thing === this.root.value) {
      return 'Cannot store values that are the same as the root';
    }
  
  }

}

module.exports = BinaryTree;