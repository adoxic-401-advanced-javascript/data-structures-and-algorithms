const { LinkedList } = require('../linkedList/linked-list');

describe('Does it make linked lists?', () => {
  it('can make empty', () => {
    const result = new LinkedList;
    const expected = {
      head: null,
      size: 0,
    };
    expect(result).toEqual(expected);
  });
  it('insert into linked list', () => {
    const list = new LinkedList();
    expect(list.size).toBe(0);
    list.insert('a test');
    expect(list.size).toBe(1);
  });
  it('can find first node', () => {
    const list = new LinkedList;
    list.insert('a test');
    const result = {
      data: 'a test',
      next: null,
    };
    expect(list.head).toEqual(result);
  });
  it('can put more than one node in order', () => {
    const list = new LinkedList;
    list.insert('snap');
    list.insert('crackle');
    list.insert('pop');
    const third = { data: 'snap', next: null };
    const second = { data: 'crackle', next: third };
    const first = { data: 'pop', next: second };
    expect(list.head).toEqual(first);
    expect(list.head.next).toEqual(second);
    expect(list.head.next.next).toEqual(third);
    expect(list.size).toBe(3);
  });
  it('can find a thing?', () => {
    const list = new LinkedList;
    list.insert('a test');
    expect(list.includes('a test')).toBe(true);
  });
  it('does not find a thing?', () => {
    const list = new LinkedList;
    list.insert('a test');
    expect(list.includes('a bird')).toBe(false);
  });
  it('gives list of data', () => {
    const list = new LinkedList;
    list.insert('pinky');
    list.insert('the brain');
    expect(list.head.data.toString()).toBe('the brain', 'pinky');
  });
});