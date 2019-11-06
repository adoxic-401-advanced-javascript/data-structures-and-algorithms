const treeIntersect = require('../treeIntersection/tree-intersection');
const BinaryTree = require('../binaryTree/binary-tree');

describe('binary tree intersection', () => {
  it('should return an array of the intersection of two trees', () => {
    const firstTree = new BinaryTree();
    const secondTree = new BinaryTree();
    firstTree.add(8);
    firstTree.add(6);
    firstTree.add(4);
    firstTree.add(3);
    firstTree.add(12);
    firstTree.add(22);
    firstTree.add(11);

    secondTree.add(10);
    secondTree.add(6);
    secondTree.add(5);
    secondTree.add(3);
    secondTree.add(12);
    secondTree.add(20);
    secondTree.add(13);

    const actual = treeIntersect(firstTree, secondTree);
    expect(actual).toEqual([6, 3, 12]);
  });
});