const findIndex = require('../arrayBinarySort/array-binary-sort');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const find = 3;

describe('array tests', () => {

  const result = findIndex(arr, find);

  test('did find array index', () => {
    expect(result).toBe(2);
  });
});