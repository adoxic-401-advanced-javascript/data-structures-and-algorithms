const path = require('path');
const fs = jest.genMockFromModule('fs');

//this is the function from the jest docs on mocking function 

let mockFiles = Object.create(null);

function _setMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file);
    const content = newMockFiles[file];

    mockFiles[file] = { content: content, stats: { mtimeMs: 1311391211 } };

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));
  }
}

function readdir(directoryPath) {
  return Promise.resolve(mockFiles[directoryPath] || []); 
}

function readFile(fullFilePath) {
  
  return Promise.resolve(mockFiles[fullFilePath].content || '');
}

function stats(fullFilePath) {
  
  return Promise.resolve(mockFiles[fullFilePath].stats || '');
}

function rename(fullFilePath, newfilePath) {
  
  return Promise.resolve(newfilePath || '');
}

fs._setMockFiles = _setMockFiles;
fs.promises = {};
fs.promises.readdir = readdir;
fs.promises.readFile = readFile;
fs.promises.stats = stats;
fs.promises.rename = rename;

module.exports = fs;