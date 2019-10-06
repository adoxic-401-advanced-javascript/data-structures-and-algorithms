function bracketValidation(str) {
  const brackets = {
    '{': 0,
    '}': 0,
    '[': 0,
    ']': 0,
    '(': 0,
    ')': 0,
  };
  let good = 0;
  let bad = 0;

  for(let i = 0; i < str.length; i++) {
    const letter = str[i];
    if(!brackets.letter) {
      brackets[letter] = 1;
    } else {
      brackets.letter++;
    }
  }

  const keys = Object.keys(brackets);
  const values = Object.values(brackets);

  for(let i = 0; i < keys.length; i += 2) {
    if(values[i] === values[i + 1] && values[i] > 0) {
      good++;
    } else if(values[i] + values[i + 1] > 0){
      bad++;
    }    
  }

  if(bad > 0) {
    return false;
  } else if(good > 0) {
    return true;
  } else {
    return false;
  }
  
}

module.exports = bracketValidation;