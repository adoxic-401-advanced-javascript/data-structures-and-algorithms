const fs = require('fs');
jest.mock('fs');
const { fileNameGetter } = require('../file-renamer');

describe('file renamer', () => {
  const MOCK_FILE_INFO = {
    '/path/to/3.txt': 'apple',
    '/path/to/27.txt': 'pear',
  };

  beforeEach(() => {
    
    fs._setMockFiles(MOCK_FILE_INFO);
  });

  it('should read the file names and push to an array', () => {
    return fileNameGetter('/path/to')
      .then(files => {
        expect(files).toEqual(['3.txt', '27.txt']);
      });
  });
});