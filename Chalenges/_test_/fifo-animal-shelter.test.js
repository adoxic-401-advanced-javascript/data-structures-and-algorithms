const Animals = require('../fifoAnimalShelter/fifo-animal-shelter');

describe('make fifo animal model', () => {

  it('make a shelter list', () => {
    const shelter = new Animals();
    shelter.enqueue('cat', 'boots');
    shelter.enqueue('cat', 'snowball');
    shelter.enqueue('dog', 'fido');
    shelter.enqueue('dog', 'ella');
    console.log(shelter);
    const dog = shelter.dequeue('dog');
    const cat = shelter.dequeue('cat');

    expect(dog).toBe('fido');
    expect(cat).toBe('boots');
  });
});