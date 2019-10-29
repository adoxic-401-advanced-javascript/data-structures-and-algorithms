const multiply = require('../bonus/multiply');

describe('multiply two numbers no *', () => {
  it('should multiply two numbers', () => {
    const one = 2;
    const two = 6;
  
    const result = multiply(one, two);
    expect(result).toBe(12);
    
  });
  it('should be the same with numbers switched', () => {
    const result = multiply(3, 5);
    const second = multiply(5, 3);
    expect(result).toBe(second);
  });
});