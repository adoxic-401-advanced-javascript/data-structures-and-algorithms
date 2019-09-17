function arrayShift(arr, newThing) {
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

module.exports = arrayShift;