/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input: numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */

function numberOfRepeatedValues(numbers, a) {
    let count = 0;
    for(const number of numbers) {
        if(number === a) {
            count++;
        }
    }
    return count;
}
const output = numberOfRepeatedValues([5,6,11,12,98, 5], 5);
console.log(output);

