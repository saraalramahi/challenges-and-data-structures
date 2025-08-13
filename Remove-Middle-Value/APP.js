"use strict ;"

function RemoveMiddleValue(arr) {
  let mid = Math.floor(arr.length / 2);
  for (let i = mid; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return arr;
}


console.log(RemoveMiddleValue([1, 2, 3, 4, 5]));       // [1, 2, 4, 5]
console.log(RemoveMiddleValue([27, 8, 15, 73, 27]));  // [27, 8, 73, 27]
console.log(RemoveMiddleValue([7, 9, 13, 25, 5, 17]));// [7, 9, 13, 5, 17]