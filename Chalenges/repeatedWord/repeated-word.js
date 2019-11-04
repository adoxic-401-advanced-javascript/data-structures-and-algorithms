const repeatedWord = (longStr) => {
  const betterStr = longStr.replace(/!|.|,|;|:/, '');
  const strArr = betterStr.split(' ');
  const storage = {};
  let key = '';
  for(let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    if(!storage.word) {
      storage[word] = word;
    } else {
      key = word;
      return;
    }
  }
  return key;
};

module.exports = repeatedWord;
