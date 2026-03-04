// Write a JavaScript code to get the even numbers from an array using any looping technique.
// [12, 98, 78, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];
const result = [];

for (const number of numbers) {
  if (number % 2 === 0) {
    result.push(number);
  }
}
console.log(result);
