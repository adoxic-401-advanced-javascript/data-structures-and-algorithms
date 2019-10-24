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
    const objVals = Object.Vals(this.set);
    const trueOrFalse = { has: false };
    
    for(let i = 0; i < objVals.length; i++) {
      const comp = objVals[i];
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
  union(set) {
    const mySet = this;
    return Set.union(set, mySet);
  }
  static intersection(setA, setB) {
    const aVals = Object.values(setA);
    const newSet = new Set();

    for(let i = 0; i < aVals.length; i++) {
      const aVal = aVals[i];
     
      if(setB[aVal]) {
        newSet.set[aVal] = aVal;
      }
    }
    return newSet.set;
  }
  static union(setA, setB) {
    const newSet = new Set();
    const aVal = Object.values(setA.set);
    const bVal = Object.values(setB.set);

    aVal.map(Val => {
      newSet.add(Val);
    });

    bVal.map(Val => {
      newSet.add(Val);
    });
    return newSet.set;
  }
  static difference(setA, setB) {
    const aVals = Object.values(setA);
    const newSet = new Set();

    for(let i = 0; i < aVals.length; i++) {
      const aVal = aVals[i];
     
      if(!setB[aVal]) {
        newSet.set[aVal] = aVal;
      }
    }
    return newSet.set;
  }
}

module.exports = Set;