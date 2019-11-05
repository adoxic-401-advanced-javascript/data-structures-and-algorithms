const repeatedWord = require('../repeatedWord/repeated-word');

describe('Checking for the first repeated word', () => {
  it('should give back the first repeated word', () => {
    const str1 = 'Once upon a time, there was a brave princess who...';
    const str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness';
    const str3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    const first = repeatedWord(str1);
    const second = repeatedWord(str2);
    const third = repeatedWord(str3);

    expect(first).toBe('a');
    expect(second).toBe('it');
    expect(third).toBe('the');
  });
});