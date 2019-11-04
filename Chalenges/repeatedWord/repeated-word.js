const repeatedWord = (longStr) => {
  const lowStr = longStr.toLowerCase();
  const strArr = lowStr.split(' ');
 
  const storage = {};

  for(let i = 0; i < strArr.length; i++) {
    const splitWord = strArr[i];
    const word = splitWord.replace('/!|.|,|;|:/', '');
    if(!storage[word]) {
      storage[word] = word;
    } else {
      return storage[word];
    }
  }
};

module.exports = repeatedWord;
