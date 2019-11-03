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
  add(key, value) {
    const hash = this.hash(key);
  
    this.buckets[hash] = [key, value];
  }
  get(key) {
    const hash = this.hash(key);
    const bucket = this.buckets[hash];
    let contents = `sorry, I couldn't find that`;
    if(!bucket) return contents;
    for(let i = 0; i < bucket.length; i += 2) {
      const arrKey = bucket[i];
      if (arrKey === key) {
        
        contents = bucket[i + 1];
      }
    }
    return contents;
  }
  contains(key) {
    const hash = this.hash(key);
    const bucket = this.buckets[hash];
    if(bucket !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = HashTable;
