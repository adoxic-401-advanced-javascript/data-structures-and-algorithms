class HashTable {
  constructor(size=20) {
    this.buckets = new Array(size);
    this.size = size;
  }
  hash(key) {
    if(typeof key !== 'string') return 'not a valid key type';

    const keyArr = key.split();
    const numArr = keyArr.map(letter => {
      return letter.charCodeAt(0);
    });
    const numString = numArr.toString();
    return +numString % this.size;
  }
}

module.exports = HashTable;
