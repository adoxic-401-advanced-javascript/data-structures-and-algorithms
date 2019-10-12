const FizzBuzzTree = require('../fizzBuzz/fizz-buzz');

describe('fizz buzz tree', () => {
  it('makes a tree', () => {
    const fbTree = new FizzBuzzTree();
    expect(fbTree.root).toBe(null);
  });
  it('fizz buzzes a tree', () => {
    const fbTree = new FizzBuzzTree();
    expect(fbTree.root).toBe(null);
    fbTree.add(10);
    fbTree.add(12);
    fbTree.add(6);
    fbTree.add(8);
    fbTree.add(12);
    fbTree.add(11);
    fbTree.add(15);
    fbTree.fizzBuzz();
    
    expect(fbTree.root).toBe('buzz');
    expect(fbTree.root.right.left.value).toBe(11);
    expect(fbTree.root.left.value).toBe('fizz');
    expect(fbTree.root.right.right.value).toBe('fizzbuzz');
  });
});