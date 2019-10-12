class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class FizzBuzzTree {
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
  fizzBuzz() {
    const preArr = [];
    const start = this.root;
    fizzBuzzMotif(start, preArr);
    return;
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
function fizzBuzzMotif(current, arr) {
  if(current) {
    const fizz = (current.value % 3 === 0) ? 'fizz' : '';
    const buzz = (current.value % 5 == 0) ? 'buzz' : '';
    const fizzbuzz = `${fizz}${buzz}`;
    if(fizzbuzz.length > 3) {
      current.value = fizzbuzz;
    }
  }
  if(current.left) arr = fizzBuzzMotif(current.left, arr);
  if(current.right) arr = fizzBuzzMotif(current.right, arr);
}

module.exports = FizzBuzzTree;