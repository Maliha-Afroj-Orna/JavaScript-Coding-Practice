/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do-while loop
 * 4. for-of --> array loop
 * 5. for-in --> object loop
 */

const friends = ["elon", "mark", "bill", "waren"];
// for-of loop
for (const friend of friends) {
  console.log(friend);
}
// for loop
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

const numbers = [12, 43, 54, 15, 66, 23, 73];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// while loop
let n = 0;
while (n < friends.length) {
  console.log(friends[n]);
  n++;
}

let n2 = 0;
while (n2 < numbers.length) {
  console.log(numbers[n2]);
  n2++;
}
