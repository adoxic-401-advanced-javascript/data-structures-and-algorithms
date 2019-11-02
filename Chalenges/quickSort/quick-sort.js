// ALGORITHM QuickSort(arr, left, right)
//     if left < right
//         // Partition the array by setting the position of the pivot value 
//         DEFINE position <-- Partition(arr, left, right)
//         // Sort the left
//         QuickSort(arr, left, position - 1)
//         // Sort the right
//         QuickSort(arr, position + 1, right)
function quickSort(arr, left, right) {
  if(left < right) {
    let position = partition(arr, left, right);
    console.log(position);
    quickSort(arr, left, position -1);
    quickSort(arr, position +1, right);
  }
}
// ALGORITHM Partition(arr, left, right)
//     // set a pivot value as a point of reference
//     DEFINE pivot <-- arr[right]
//     // create a variable to track the largest index of numbers lower than the defined pivot
//     DEFINE low <-- left - 1
//     for i <- left to right do
//         if arr[i] <= pivot
//             low++
//             Swap(arr, i, low)
function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left -1;
  for(let i = left; i < right; i++) {
    if(arr[i] <= pivot) {
      low++;
      Swap(arr, i, low);
    } else {
      Swap(arr, right, low + 1);
    }
  }
  return low;
}
//      // place the value of the pivot location in the middle.
//      // all numbers smaller than the pivot are on the left, larger on the right. 
//      Swap(arr, right, low + 1)
//     // return the pivot index point
//      return low + 1
function Swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
// ALGORITHM Swap(arr, i, low)
//     DEFINE temp;
//     temp <-- arr[i]
//     arr[i] <-- arr[low]
//     arr[low] <-- temp

module.exports = quickSort;