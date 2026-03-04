// Check whether a string contains all the vowels a, e, i, o, u

let sentence = "I am Malihau. I love to travel";

let lowerSentence = sentence.toLowerCase();
let vowels = "aeiou";
let count = 0;

for (let i = 0; i < vowels.length; i++) {
  if (lowerSentence.includes(vowels[i])) {
    count++;
  }
}
if (count === 5) {
  console.log("Yes");
} else {
  console.log("No");
}
