/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */

// odd
let n = 61;
while (n <= 100) {
  if (n % 2 !== 0) {
    console.log("Odd Number: ", n);
  }
  n++;
}

// even
let n2 = 78;
while (n2 <= 98) {
  if (n2 % 2 === 0) {
    console.log("Even Number: ", n2);
  }
  n2++;
}
