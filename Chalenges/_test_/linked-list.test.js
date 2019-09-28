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
  it('add at end?', () => {
    const list = new LinkedList;
    list.insert('pinky');
    list.append('the brain');
    expect(list.head.data.toString()).toBe('pinky', 'the brain');
  });
  it('add before target', () => {
    const list = new LinkedList;
    list.insert('snap');
    list.insert('pop');
    list.insertBefore('snap', 'crackle');
    const third = { data: 'snap', next: null };
    const second = { data: 'crackle', next: third };
    const first = { data: 'pop', next: second };
    expect(list.head.data).toEqual(first.data);
    expect(list.head.next.data).toEqual(second.data);
    expect(list.head.next.next.data).toEqual(third.data);
    expect(list.size).toBe(3);
  });
  it('add after target', () => {
    const list = new LinkedList;
    list.insert('snap');
    list.insert('pop');
    list.insertAfter('pop', 'crackle');
    const third = { data: 'snap', next: null };
    const second = { data: 'crackle', next: third };
    const first = { data: 'pop', next: second };
    expect(list.head.data).toEqual(first.data);
    expect(list.head.next.data).toEqual(second.data);
    expect(list.head.next.next.data).toEqual(third.data);
    expect(list.size).toBe(3);
  });
});