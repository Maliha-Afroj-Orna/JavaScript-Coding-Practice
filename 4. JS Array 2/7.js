// Given a 2D array, update the value at second row first item to 99 and print the updated array.
// Expected Array:
// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

let numbers2d = [
  [1, 2],
  [3, 4],
  [5, 6],
];

numbers2d[1][0] = 99;
console.log(numbers2d);
