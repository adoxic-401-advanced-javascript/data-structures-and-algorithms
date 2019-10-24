const Set = require('../set/Set');

describe('making a Set Class', () => {

  it('should make an empty set', () => {
    const testSet = new Set();
    expect(testSet.size).toBe(0);
    expect(testSet.set).toEqual({});
  });

  it('should put something in a set if valid', () => {
    const testSet = new Set();
    testSet.add(5);
    const repeat = testSet.add(5);
    expect(testSet.set[5]).toBe(5);
    expect(testSet.size).toBe(1);
    expect(repeat).toBe('this is already here try adding something else');
  });

  it('should remove something or error message', () => {
    const testSet = new Set();
    testSet.add(5);
    testSet.add('word');
    testSet.remove('word');
    const alreadyGone = testSet.remove('word');
    expect(alreadyGone).toBe('this was not here to begin with');
    testSet.add('word');
    expect(testSet.set['word']).toBe('word');
  });

  it('should see if a set contains a value', () => {
    const testSet = new Set();
    testSet.add(5);
    testSet.add('word');
    const actual = testSet.has(5);
    const word = testSet.has('word');
    expect(actual).toBeTruthy();
    expect(word).toBeTruthy();
  });

  it('should check and return intersection', () => {
    const testSetA = new Set();
    testSetA.add(5);
    testSetA.add('word');

    const testSetB = new Set();
    testSetB.add(5);
    testSetB.add('string');

    const resultStatic = Set.intersection(testSetA.set, testSetB.set);
    const resultInstance = testSetB.intersection(testSetA.set);
    expect(resultStatic).toEqual({ 5: 5 });
    expect(resultInstance).toEqual({ 5: 5 });
  });

  it('should return the union of two sets', () => {
    const testSetA = new Set();
    testSetA.add(5);
    testSetA.add('word');

    const testSetB = new Set();
    testSetB.add(5);
    testSetB.add('string');

    const resultStatic = Set.union(testSetA, testSetB);
    expect(resultStatic).toEqual({ 5: 5, string: 'string', word: 'word' });
  });
});