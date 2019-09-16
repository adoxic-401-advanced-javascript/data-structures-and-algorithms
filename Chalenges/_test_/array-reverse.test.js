const reverseArray = require('../arrayRerverse/array-reverse');

const testArr = [1, 2, 3];
const result = reverseArray(testArr);

describe('array tests', () => {

  test('is array reversed', () => {
    expect(result).toStrictEqual([3, 2, 1]);
  });
});