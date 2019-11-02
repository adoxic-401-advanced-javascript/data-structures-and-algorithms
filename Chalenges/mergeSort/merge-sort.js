// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length
           
//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)

// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0

//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1
            
//         k <-- k + 1

//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left

const mergeSort = (arr) => {
  
  const n = arr.length;
  
  if(n > 1) {
    const save = arr.slice();
    const mid = Math.floor(n / 2);
    const left = save.splice(0, mid);
    const right = save;
  
    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr);
  }

  
};

const merge = (left, right, arr) => {
  let iArr = 0;
  let iLeft = 0;
  let iRight = 0;

  while(iLeft < left.length && iRight < right.length) {
    if(left[iLeft] <= right[iRight]) {
      arr[iArr] = left[iLeft];
      iLeft = iLeft + 1;
    } else {
      arr[iArr] = right[iRight];
      iRight = iRight + 1;
    } 
    iArr = iArr + 1;
  }

  if(iLeft < left.length) {
    arr.concat(left);
  } else {
    arr.concat(right);
  }
  console.log('is arr getting stuff', arr);
  return arr;
};

module.exports = mergeSort;