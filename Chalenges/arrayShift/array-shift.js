function arraySplice(arr, newThing) {
  const newArr = [];
  const newIndex = Math.floor(arr.length / 2);
  
  for(let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if(i < newIndex) {
      newArr[i] = num;
    } else {
      newArr[i + 1] = num;
    }
  }
  newArr[newIndex] = newThing;
  return newArr;
}

function arrayShift(arr, newThing) {
  const newArr = [];
  const newIndex = 0;
  
  for(let i = 0; i < arr.length; i++) {
    const num = arr[i];
    newArr[i + 1] = num;
  }
  newArr[newIndex] = newThing;
  return newArr;
}

module.exports = {arrayShift, arraySplice};