// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// 'person working hard a am I'

const statement = "I am a hard working person";

const words = statement.split(" ");

let result = [];
for (let i = words.length - 1; i >= 0; i--) {
  result.push(words[i]);
}
const output = result.join(' ');
console.log(output);
