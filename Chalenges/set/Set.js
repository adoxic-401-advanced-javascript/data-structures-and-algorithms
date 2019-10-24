class Set {
  constructor() {
    this.set = {};
  }
  add(value) {
    if(!this.set[value]) {
      this.set[value] = value;
    } else {
      return 'this is already here try adding something else';
    }
  }
  remove(value) {
    if(this.set[value]) {
      delete this.set[value];
    } else {
      return 'this was not here to begin with';
    }
  }
  has(value) {
    const objVals = Object.values(this.set);
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
    const mySet = this;
    return Set.intersection(set, mySet);
  }
  union(set) {
    const mySet = this;
    return Set.union(set, mySet);
  }
  difference(set) {
    const mySet = this;
    return Set.difference(set, mySet);
  }
  static intersection(setA, setB) {
    const aVals = Object.values(setA.set);
    const newSet = new Set();

    for(let i = 0; i < aVals.length; i++) {
      const aVal = aVals[i];
     
      if(setB.set[aVal]) {
        newSet.set[aVal] = aVal;
      }
    }
    return newSet;
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
    return newSet;
  }
  static difference(setA, setB) {
    const aVals = Object.values(setA.set);
    const bVals = Object.values(setB.set);
    const newSet = new Set();

    for(let i = 0; i < aVals.length; i++) {
      const aVal = aVals[i];
     
      if(!setB.set[aVal]) {
        newSet.set[aVal] = aVal;
      }
    }

    for(let i = 0; i < bVals.length; i++) {
      const bVal = bVals[i];
     
      if(!setA.set[bVal]) {
        newSet.set[bVal] = bVal;
      }
    }
    return newSet;
  }
}

module.exports = Set;