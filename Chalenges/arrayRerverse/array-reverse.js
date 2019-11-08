function reverseArray(arr) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    let newIndex = arr.length;
    newIndex -= 1;
    const num = arr[i];
    newArr[newIndex -i] = num;
  }
  return newArr;
}

module.exports = reverseArray;