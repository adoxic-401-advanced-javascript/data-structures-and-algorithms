const arrayShift = require('../arrayShift/array-shift');


describe('array tests', () => {
  
  it('is array shifted', () => {
    const testArr = [1, 2, 4, 5];
    const result = arrayShift(testArr, 3);
    expect(result).toStrictEqual([1, 2, 3, 4, 5]);
  });
});