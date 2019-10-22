const dateAdd = require('../date/date-add');

describe('can add to dates by unit?', () => {

  it('should add days, hours', () => {
    const today = Date.parse('2019-10-22T00:10:50.616Z');
   
    const result = dateAdd(today, '1.d 1.h');
    const expected = new Date('2019-10-23T01:10:50.616Z');
    expect(result).toEqual(expected);
  });
  it('should add week, 3 hours', () => {
    const today = Date.parse('2019-10-22T00:10:50.616Z');
   
    const result = dateAdd(today, '1.w 3.h');
    const expected = new Date('2019-10-29T03:10:50.616Z');
    expect(result).toEqual(expected);
  });
  it('should add year, 3 weeks, 15 minutes', () => {
    const today = Date.parse('2019-10-22T00:10:50.616Z');
   
    const result = dateAdd(today, '1.y 3.w 15.m');
    const expected = new Date('2020-10-13T00:25:50.616Z');
    expect(result).toEqual(expected);
  });
});