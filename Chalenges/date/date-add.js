const dateAdd = (today, diff) => {
  const arr = diff.split(' ');
  const modObj = {
    s: 1,
    m: 2,
    h: 3,
    d: 4,
    w: 5,
    M: 6,
    y: 7, 
  };
  const arrMultiply = [1, 60, 60, 24, 7, 4, 12];
  const badArray = [];
  arr.forEach(string => {
    const split = string.split('.');
    const getIndex = modObj[split[split.length-1]];
    const newTime = timesMotif(arrMultiply, getIndex, 1);
    badArray.push(newTime);
  });
  console.log(badArray);
  let newTime = badArray.reduce((a,b) => a + b, 0);
  newTime = newTime * 1000;
 
  const totalTime = newTime + today;
  const newTotalTime = new Date(totalTime);

  console.log(newTime, today);
  return newTotalTime;
};

const timesMotif = (arr, index, acc) => {
  index -= 1;
  let num = arr[index];
  let newNum = acc * num;
  console.log(acc, arr[index]);
  if(index > 0) newNum = timesMotif(arr, index, newNum);
  return newNum;
};

module.exports = dateAdd;
