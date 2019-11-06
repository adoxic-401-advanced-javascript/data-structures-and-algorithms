const HashTable = require('../hashTable/hash-table');
const leftJoin = require('../leftJoin/left-join');

describe('Left Join', () => {
  const hashOne = new HashTable();
  const hashTwo = new HashTable();
  hashOne.add('happy', 'delighted');
  hashTwo.add('happy', 'sad');
  hashOne.add('sad', 'grim');
  hashTwo.add('sad', 'happy');
  hashOne.add('angry', 'furious');
  hashTwo.add('angry', 'forgiving');

  it('should join without errors', () => {
    leftJoin(hashOne, hashTwo);
    const happyVal = hashOne.get('happy');
    expect(happyVal).toBe('delighted sad');
  });
});