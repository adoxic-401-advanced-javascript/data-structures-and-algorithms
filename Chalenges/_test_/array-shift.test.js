const array = require('../arrayShift/array-shift');


describe('array tests', () => {
  
  it('is array shifted', () => {
    const testArr = [2, 3, 4, 5];
    const result = array.arrayShift(testArr, 1);
    expect(result).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it('is array shifted', () => {
    const testArr = [1, 2, 4, 5];
    const result = array.arraySplice(testArr, 3);
    expect(result).toStrictEqual([1, 2, 3, 4, 5]);
  });

});