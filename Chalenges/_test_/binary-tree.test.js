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
    newTree.add(2);

    expect(newTree.root.value).toBe(6);
    expect(newTree.root.left.value).toBe(4);
    expect(newTree.root.left.left.value).toBe(2);
    expect(newTree.root.right.value).toBe(8);
  });

  it('preOrder tree', () => {
    const newTree = new TreeNode();
    expect(newTree.root).toBe(null);
    
    newTree.add(6);
    newTree.add(8);
    newTree.add(4);
    newTree.add(2);
    newTree.add(3);

    const values = newTree.preOrder();
    expect(values).toEqual([6, 4, 2, 3, 8]);
  });

  it('inOrder tree', () => {
    const newTree = new TreeNode();
    expect(newTree.root).toBe(null);
    
    newTree.add(6);
    newTree.add(8);
    newTree.add(4);
    newTree.add(2);
    newTree.add(1);
    
    const values = newTree.inOrder();
    
    expect(values).toEqual([1, 2, 4, 6, 8]);
  });
  it('postOrder tree', () => {
    const newTree = new TreeNode();
    expect(newTree.root).toBe(null);
    
    newTree.add(6);
    newTree.add(8);
    newTree.add(4);
    newTree.add(2);
    newTree.add(1);
    
    const values = newTree.postOrder();
    
    expect(values).toEqual([6, 8, 4, 2, 1]);
  });
});