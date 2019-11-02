const mergeSort = require('../mergeSort/merge-sort');

describe('Merge sort arr', () => {
  it('should sort array', () => {
    const arr = [7, 80, 21, 35, 1, 28, 4, 44];
    mergeSort(arr);
    expect(arr).toEqual([1, 4, 7, 21, 28, 35, 44, 80]);
  });

  it('should still work if some numbers are the same', () => {
    const arr = [21, 5, 15, 29, 5, 33, 20, 5];
    mergeSort(arr);
    expect(arr).toEqual([5, 5, 5, 15, 20, 21, 29, 33]);
  });
});