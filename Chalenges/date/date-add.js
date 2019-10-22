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
    const newTime = timesMotif(arrMultiply, getIndex);
    badArray.push(newTime);
  });
  let newTime = addToSelfMotif(badArray, badArray.length);

  let firstTime = today.valueOf();
  const totalTime = newTime + firstTime;
  const newTotalTime = new Date(totalTime);

  console.log(newTime, newTotalTime);
  return newTotalTime;
};

const timesMotif = (arr, index) => {
  index -= 1;
  let num = arr[index];
  console.log(num);
  if(index > 0) num = timesMotif(arr, index);
  return num * 1000;
};

const addToSelfMotif = (arr, index) => {
  index -= 1;
  let accumulator = 0;
  if(arr[index]) accumulator += arr[index];
  if(arr[index]) accumulator = addToSelfMotif(arr, index);
  return accumulator;
};
module.exports = dateAdd;
