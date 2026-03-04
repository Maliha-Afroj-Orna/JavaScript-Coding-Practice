// Capitalize Every first Letter of each word in a String

let sentence = "capitalize every first Letter of each word in a String";

let words = sentence.toLowerCase().split(" ");
let result = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let capitalEachWord = word.charAt(0).toUpperCase() + word.slice(1);
  result.push(capitalEachWord);
}
console.log(result.join(" "));


