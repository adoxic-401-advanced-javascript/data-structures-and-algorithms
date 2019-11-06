function findIndex(arr, find) {
  let begin = 0;
  let end = arr.length - 1;

  while(begin <= end) {
    let mid = Math.floor((begin + end) / 2);

    if(arr[mid] === find) {
      return mid;
    }  
    if(find < arr[mid]) {
      end = mid - 1;
    } 
    if(find > arr[mid]) {
      begin = mid + 1;
    }
  }
  return -1;
}

module.exports = findIndex;