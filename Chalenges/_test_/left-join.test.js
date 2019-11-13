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
    const joinArr = leftJoin(hashOne, hashTwo);
    
    expect(joinArr[0]).toEqual(['happy', 'delighted', 'sad']);
    expect(joinArr[1]).toEqual(['sad', 'grim', 'happy']);
    expect(joinArr[2]).toEqual(['angry', 'furious', 'forgiving']);
  });

  it('should add null if there is not value in the second Hash Table', () => {
    hashOne.add('peppy', 'energetic');
    const joinArr = leftJoin(hashOne, hashTwo);

    expect(joinArr[1]).toEqual(['peppy', 'energetic', null]);
  });

  it('should not add things from the second hash that do not exist in the first', () => {
    hashTwo.add('pouty', 'upbeat');
    const joinArr = leftJoin(hashOne, hashTwo);
    
    expect(joinArr.length).toEqual(4);
  });
});