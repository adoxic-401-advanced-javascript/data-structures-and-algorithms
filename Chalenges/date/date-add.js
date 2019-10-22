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
    const newTime = timesMotif(arrMultiply, getIndex, 0);
    badArray.push(newTime);
  });
  console.log(badArray);
  let newTime = badArray.reduce((a,b) => a + b, 0);

  let firstTime = today.valueOf();
  const totalTime = newTime + firstTime;
  const newTotalTime = new Date(totalTime);

  console.log(newTime, newTotalTime);
  return newTotalTime;
};

const timesMotif = (arr, index, acc) => {
  index -= 1;
  let num = arr[index];
  acc += num;
  if(index > 0) num = timesMotif(arr, index-1);
  return acc * 1000;
};

module.exports = dateAdd;
