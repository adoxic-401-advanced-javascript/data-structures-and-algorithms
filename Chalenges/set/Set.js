class Set {
  constructor() {
    this.set = {};
    this.size = 0;
  }
  add(value) {
    if(!this.set[value]) {
      this.size += 1;
      this.set[value] = value;
    } else {
      return 'this is already here try adding something else';
    }
  }
  remove(value) {
    if(this.set[value]) {
      this.size -= 1;
      delete this.set[value];
    } else {
      return 'this was not here to begin with';
    }
  }
  has(value) {
    const objKeys = Object.keys(this.set);
    const trueOrFalse = { has: false };
    
    for(let i = 0; i < objKeys.length; i++) {
      const comp = objKeys[i];
      if(value == comp) {
        trueOrFalse.has = true;
      }
    }
    
    return trueOrFalse.has;
  }
  intersection(set) {
    const mySet = this.set;
    return Set.intersection(set, mySet);
  }
  static intersection(setA, setB) {
    const aKeys = Object.values(setA);
    const intersect = {};

    for(let i = 0; i < aKeys.length; i++) {
      const aKey = aKeys[i];
     
      if(setB[aKey]) {
        intersect[aKey] = aKey;
      }
    }
    return intersect;
  }
  static union(setA, setB) {
    const newSet = new Set();
    const aKey = Object.values(setA.set);
    const bKey = Object.values(setB.set);

    aKey.map(key => {
      newSet.add(key);
    });
    bKey.map(key => {
      newSet.add(key);
    });
    console.log(newSet);
    return newSet.set;
  }
}

module.exports = Set;