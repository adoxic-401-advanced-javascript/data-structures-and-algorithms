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
  const addedTime = arr.forEach(string => {
    const split = string.split('.');
    const getIndex = modObj[split[split.length-1]];
    const newTime = times(arrMultiply, getIndex);
    let totalTime = today.valueOf();
    return totalTime + newTime;
  });
  const newTotalTime = new Date(addedTime[addedTime.length-1]);

  console.log(today, newTotalTime);
};

const times = (arr, index) => {
  index -= 1;
  console.log(arr);
  let num = arr[index];
  if(index > 0) num = times(arr, index);
  return num * 1000;
};
module.exports = dateAdd;
