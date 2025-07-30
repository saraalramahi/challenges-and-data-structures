"use strict";
function MinimumValue(arr) {
  if (arr.length === 0) {
    return null; 
  }

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// Examples :
console.log(MinimumValue([10, 20, 8, 2, -1])); // -1
console.log(MinimumValue([3, 25, 5, 7, 1]));    // 1
console.log(MinimumValue([4, 90, 13, -45, 22]));  // -45