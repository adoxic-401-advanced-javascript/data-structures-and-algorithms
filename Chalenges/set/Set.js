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
}

module.exports = Set;