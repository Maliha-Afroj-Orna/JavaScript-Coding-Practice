// Write a JavaScript code to reverse the array colors without using the reverse method.
// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ["red", "blue", "green", "yellow", "orange"];

const result = [];
for (let i = colors.length - 1; i >= 0; i--) {
  result.push(colors[i]);
}
console.log(result);
