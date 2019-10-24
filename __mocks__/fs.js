const path = require('path');
const fs = jest.genMockFromModule('fs');

//this is the function from the jest docs on mock function 

let mockFiles = Object.create(null);

function _setMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));
  }
}

function readdir(directoryPath) {
  return Promise.resolve(mockFiles[directoryPath] || []); 
}

fs._setMockFiles = _setMockFiles;
fs.promises = {};
fs.promises.readdir = readdir;

module.exports = fs;