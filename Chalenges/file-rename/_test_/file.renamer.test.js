jest.mock('../file-renamer', () => {
  return (() => Promise.resolve('hello I am a test'));
});