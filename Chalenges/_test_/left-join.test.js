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

  it('should check state before left join', () => {
    const happyVal = hashOne.get('happy');
    const sadVal = hashOne.get('sad');
    const angryVal = hashOne.get('angry');
    expect(happyVal).toBe('delighted');
    expect(sadVal).toBe('grim');
    expect(angryVal).toBe('furious');
  });

  it('should join without errors', () => {
    leftJoin(hashOne, hashTwo);
    const happyVal = hashOne.get('happy');
    const sadVal = hashOne.get('sad');
    const angryVal = hashOne.get('angry');
    expect(happyVal).toBe('delighted sad');
    expect(sadVal).toBe('grim happy');
    expect(angryVal).toBe('furious forgiving');
  });

  it('should add null if there is not value in the second Hash Table', () => {
    hashOne.add('peppy', 'energetic');
    leftJoin(hashOne, hashTwo);
    const peppyVal = hashOne.get('peppy');
    expect(peppyVal).toBe('energetic null');
  });
});