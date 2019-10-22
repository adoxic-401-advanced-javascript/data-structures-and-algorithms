const data = require('../checkout/data');
const sortByDay = require('../checkout/checkout');

describe('group by day', () => {
  it('put into object', () => {
    const sortedObj = sortByDay(data);
   
    expect(sortedObj).toEqual({ 
      'Fri 05 Jul 2019': 37,
      'Fri 12 Jul 2019': 8,
      'Fri 19 Jul 2019': 33,
      'Fri 26 Jul 2019': 55,
      'Mon 01 Jul 2019': 21,
      'Mon 08 Jul 2019': 29,
      'Mon 15 Jul 2019': 18,
      'Mon 22 Jul 2019': 15,
      'Mon 29 Jul 2019': 19,
      'Sat 06 Jul 2019': 16,
      'Sat 13 Jul 2019': 35,
      'Sat 27 Jul 2019': 14,
      'Sun 07 Jul 2019': 18,
      'Sun 14 Jul 2019': 11,
      'Sun 21 Jul 2019': 16,
      'Sun 28 Jul 2019': 16,
      'Thu 04 Jul 2019': 47,
      'Thu 11 Jul 2019': 10,
      'Thu 18 Jul 2019': 25,
      'Thu 25 Jul 2019': 3,
      'Tue 02 Jul 2019': 11,
      'Tue 09 Jul 2019': 18,
      'Tue 16 Jul 2019': 9,
      'Tue 30 Jul 2019': 7,
      'Wed 03 Jul 2019': 24,
      'Wed 10 Jul 2019': 12,
      'Wed 17 Jul 2019': 18,
      'Wed 24 Jul 2019': 6,
    });
  });
});