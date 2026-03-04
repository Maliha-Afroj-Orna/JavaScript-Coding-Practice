// Reverse result = [7, 6, 5, 4, 3, 2, 1];
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

// reverse()
const reversed = numbers.reverse();
console.log(reversed);

// for-of loop
const rev_numbers = [];
for (const num of numbers) {
  rev_numbers.unshift(num);
}
console.log(rev_numbers);

// for loop
const rev_rev_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  rev_rev_numbers.push(num);
}
console.log(rev_rev_numbers);
