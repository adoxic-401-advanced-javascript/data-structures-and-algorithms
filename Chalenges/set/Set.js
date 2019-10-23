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
    console.log(value, objKeys);
    for(let i = 0; i < objKeys.length; i++) {
      const comp = objKeys[i];
      if(value == comp) {
        trueOrFalse.has = true;
      }
    }
    console.log(trueOrFalse);
    return trueOrFalse.has;
  }
}

module.exports = Set;