/**
 * Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function largestWord(str) {
    let words = str.split(' ');
    let largest = words[0];
    for(let word of words) {
        if(word.length > largest.length) {
            largest = word;
        }
    }
    return largest;
}

const output = largestWord("I am learning Programming to become a programmer");
console.log(output);