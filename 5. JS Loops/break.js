// break --> for loop
// for (let i = 1; i < 150; i++) {
//   console.log(i);
//   if (i >= 5) {
//     break;
//   }
// }
// console.log("Life after break");

// break --> while loop
let n = 1;
while (n < 150) {
  console.log(n);
  if (n >= 5) {
    break;
  }
  n++;
}
console.log("Life is short");