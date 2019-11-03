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

  it('should add a key value set to hash table', () => {
    const hashTable = new HashTable();
    const paintBrand = { paint: 'Holbein' };
    const key = Object.keys(paintBrand);
    hashTable.add(key[0], paintBrand.paint);
    
    expect(hashTable.buckets[12]).toEqual(['paint', 'Holbein']);
  });

  it('should error if the key is not a string', () => {
    const hashTable = new HashTable();
    const err = hashTable.hash(true);
    expect(err).toBe('not a valid key type');
  });

  it('should get using a key', () => {
    const hashTable = new HashTable();
    const paintBrand = { paint: 'Holbein' };
    const key = Object.keys(paintBrand);
    hashTable.add(key[0], paintBrand.paint);
    const actual = hashTable.get(key[0]);

    expect(actual).toBe('Holbein');
  });

  it('should error if there is nothing saved at given key', () => {
    const hashTable = new HashTable();
    const err = hashTable.get('thing');

    expect(err).toBe(`sorry, I couldn't find that`);
  });

  it('should see if a key is being used in the buckets', () => {
    const hashTable = new HashTable();
    const paintBrand = { paint: 'Holbein' };
    const key = Object.keys(paintBrand);
    const before = hashTable.contains(key[0]);

    expect(before).toBe(false);

    hashTable.add(key[0], paintBrand.paint);
    const after = hashTable.contains(key[0]);
    expect(after).toBe(true);
  });
});