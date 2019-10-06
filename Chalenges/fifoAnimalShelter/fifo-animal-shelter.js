const Queue = require('../stackAndQueue/queue');

class Animals {
  constructor() {
    this.catList = new Queue();
    this.dogList = new Queue();
  }

  enqueue(type, info) {
    const cat = this.catList;
    const dog = this.dogList;
  
    if(type === 'cat') {
      cat.enqueue(info);
    } else {
      dog.enqueue(info);
    }
  }
  dequeue(type) {
    const cat = this.catList;
    const dog = this.dogList;

    if(type === 'cat') {
      return cat.dequeue();
    } else {
      return dog.dequeue();
    }
  }
}

module.exports = Animals;