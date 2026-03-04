// break --> I am done with this loop --> Loop end
// continue --> skip rest of the code for this iteration

// for loop
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// while loop
let n = 0;
while (n <= 10) {
  n++;
  if (n % 2 !== 0) {
    continue;
  }
  console.log(n);
}
