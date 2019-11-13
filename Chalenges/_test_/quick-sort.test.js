const quickSort = require('../quickSort/quick-sort');

describe('implement a quick sort', () => {
  it('should sort the numbers from smallest to biggest', () => {
    const arr = [30, 4, 88, 10, 2, 33];
    const left = 0;
    const right = 5;
    quickSort(arr, left, right);
    expect(arr).toEqual([2, 4, 10, 30, 33, 88]);
  });
});