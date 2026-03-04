// Use a for...of loop to concatenate all the elements of an array into a single string.
// 'TomTimTinTik'

let numbers = ["Tom", "Tim", "Tin", "Tik"];
let result = [];
for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i]);
}
let output = result.join("");
console.log(output);
