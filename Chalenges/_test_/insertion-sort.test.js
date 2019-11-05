const insertionSort = require('../insertionSort/insertion-sort');

describe('making insertion sort', () => {
  it('should sort an array', () => {
    const numArr = [2, 30, 1, 8, 23];
    const toBeSorted = [];
    const actual = insertionSort(toBeSorted, numArr);
    expect(actual).toEqual([1, 2, 8, 23, 30]);
  });
});