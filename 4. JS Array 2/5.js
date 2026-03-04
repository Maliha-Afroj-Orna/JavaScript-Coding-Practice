// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
// Original: [1, 2, 3] Copy: [99, 2, 3]

const numbers = [1, 2, 3];

const newNumbers = [...numbers];
newNumbers[0] = 99;

console.log(numbers);
console.log(newNumbers);
