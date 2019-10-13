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
    } else {
      addMotif(this.root, newNode);
    }
  }
  preOrder() {
    const preArr = [];
    const start = this.root;
    const collected = preOrderMotif(start, preArr);
    return collected;
  }
  inOrder() {
    const inArr = [];
    const start = this.root;
    const collected = inOrderMotif(start, inArr);
    return collected;
  }
  postOrder() {
    const postArr = [];
    const start = this.root;
    const collected = postOrderMotif(start, postArr);
    return collected;
  }
  //https://levelup.gitconnected.com/the-magicians-guide-to-algorithms-part-4-the-breadth-first-search-b800aec8ccf8
  //Used this as a guide, however that example is search not a return all and it's a array not a linked list so I modified a lot.
  breadthFirst() {
    const queue = [];
    let base = this.root;
    queue.push(base);
    const breadthArr = [];

    while(queue.length !== 0) {
      for(let i = 0; i < queue.length; i++) {
        const current = queue.shift();
        console.log(current);
        console.log('base', base);

        if(current.value !== null) {
          breadthArr.push(current.value);
          console.log(breadthArr);
        }
        if(current.left) {
          queue.push(base.left);
        }
        if(current.right) {
          queue.push(base.right);
        }
        if(!current.left && !current.right) {
          return breadthArr;
        }
      }
      return breadthArr;
    }
    return breadthArr;
  }
}
//I couldn't figure out recursion on my own so I referenced Dave Trost's code for this challenge
//I refactored a bit to make things match what I already had written 
function addMotif(current, node) {
  if(node.value === current.value) return 'this value is already in the tree';
  
  //if the function returns true side will equal left if false will return right
  const side = (node.value < current.value) ? 'left' : 'right';
  current[side] ? addMotif(current[side], node) : current[side] = node;
}
//still Dave refs but I wrote the method and test myself
function preOrderMotif(current, arr) {
  if(current) arr.push(current.value);
  if(current.left) arr = preOrderMotif(current.left, arr);
  if(current.right) arr = preOrderMotif(current.right, arr);
  return arr;
}

function inOrderMotif(current, arr) {
  if(current.left) arr = inOrderMotif(current.left, arr);
  arr.push(current.value);
  if(current.right) arr = inOrderMotif(current.right, arr);
  return arr;
}
//I got this one all by myself!!
function postOrderMotif(current, arr) {
  if(current) arr.push(current.value);
  if(current.right) arr = preOrderMotif(current.right, arr);
  if(current.left) arr = preOrderMotif(current.left, arr);
  return arr;
}

module.exports = BinaryTree;