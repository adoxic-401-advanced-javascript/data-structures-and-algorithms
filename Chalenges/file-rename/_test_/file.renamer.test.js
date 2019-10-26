const fs = require('fs');
jest.mock('fs');
const { fileNameGetter, fileLooper } = require('../file-renamer');

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

  it('should gets new file name', () => {
    return fileLooper('/path/to')
      .then(contents => {
        console.log(contents);
        expect(contents).toEqual(['apple-3-1970-01-16T04:16:31.211Z', 'pear-27-1970-01-16T04:16:31.211Z']);
      });
  });
  
});