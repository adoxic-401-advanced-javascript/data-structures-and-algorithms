const dateAdd = require('../date/date-add');

describe('can add to dates by unit?', () => {

  it('should log a date object', () => {
    const today = Date.parse('2019-10-22T00:10:50.616Z');
    const result = dateAdd(today, '1.d 1.h');
    const expected = '2019-10-23T01:10:50.616Z';
    expect(result).toBe(expected);
  });
});