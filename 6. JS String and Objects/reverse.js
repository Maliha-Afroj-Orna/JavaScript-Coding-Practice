const sentence = "I am learning Web Dev.";
// const result = '.veD beW gninrael ma I';

// reverse --> split('').reverse().join('')
const reversed = sentence.split('').reverse().join('');
console.log(reversed);


// reverse --> for-of
let reverse = "";
for (const letter of sentence) {
  reverse = letter + reverse;
}
console.log(reverse);

// reverse --> for
let rev = '';
for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  rev = letter + rev;
}
console.log(rev);
