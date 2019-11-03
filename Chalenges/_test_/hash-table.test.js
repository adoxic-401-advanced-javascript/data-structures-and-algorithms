const HashTable = require('../hashTable/hash-table');

describe('Hash Table', () => {
  it('should make a hash table', () => {
    const hashTable = new HashTable();
  
    expect(hashTable.size).toBe(20);
  });

  it('should create a hash', () => {
    const hashTable = new HashTable();
    const hash = hashTable.hash('something');

    expect(hash).toBe(15);
  });

  
});