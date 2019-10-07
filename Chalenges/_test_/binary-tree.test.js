const TreeNode = require('../binaryTree/binary-tree');

describe('make and traverse a binary tree', () => {
  it('make a tree', () => {
    const newTree = new TreeNode();
    expect(newTree.root).toBe(null);
    
    newTree.add(6);
    newTree.add(8);
    newTree.add(4);

    expect(newTree.root.value).toBe(6);
    expect(newTree.root.left.value).toBe(4);
    expect(newTree.root.right.value).toBe(8);
  });

  it('make a tree', () => {
    const newTree = new TreeNode();
    expect(newTree.root).toBe(null);
    
    newTree.add(6);
    newTree.add(8);
    newTree.add(4);

    expect(newTree.root.value).toBe(6);
    expect(newTree.root.left.value).toBe(4);
    expect(newTree.root.right.value).toBe(8);
  });
});