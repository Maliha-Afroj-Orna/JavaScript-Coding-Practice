/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
// odd
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// even
for (let i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
