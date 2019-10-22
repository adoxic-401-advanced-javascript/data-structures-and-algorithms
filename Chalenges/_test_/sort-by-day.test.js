const data = require('../checkout/data');
const sortByDay = require('../checkout/checkout');

describe('group by day', () => {
  it('put into object', () => {
    const sortedObj = sortByDay(data);
   
    expect(sortedObj).toEqual({
      'Thu Jul 18 2019': 18,
      'Wed Jul 03 2019': 31,
      'Tue Jul 09 2019': 18,
      'Mon Jul 22 2019': 15,
      'Thu Jul 04 2019': 50,
      'Mon Jul 29 2019': 20,
      'Fri Jul 12 2019': 12,
      'Fri Jul 26 2019': 38,
      'Thu Jul 11 2019': 10,
      'Fri Jul 19 2019': 32,
      'Mon Jul 08 2019': 22,
      'Sun Jul 07 2019': 16,
      'Sun Jul 21 2019': 11,
      'Sun Jul 14 2019': 11,
      'Sat Jul 27 2019': 16,
      'Tue Jul 23 2019': 2,
      'Tue Jul 30 2019': 6,
      'Wed Jul 10 2019': 12,
      'Thu Jul 25 2019': 24,
      'Sun Jun 30 2019': 13,
      'Sun Jul 28 2019': 10,
      'Sat Jul 13 2019': 31,
      'Sat Jul 06 2019': 25,
      'Tue Jul 16 2019': 18,
      'Fri Jul 05 2019': 27,
      'Mon Jul 15 2019': 27,
      'Tue Jul 02 2019': 11,
      'Sat Jul 20 2019': 5,
      'Wed Jul 24 2019': 4,
      'Mon Jul 01 2019': 8,
      'Wed Jul 17 2019': 8,
    });
  });
});