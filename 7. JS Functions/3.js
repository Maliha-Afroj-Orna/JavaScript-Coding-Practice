// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers, arrSize) {
    let total = 0;
    for(const number of numbers) {
        total += number;
    }
    const avg = total / arrSize;
    return avg;


}
const arr = [2, 5, 9, 3, 8, 65, 12, 4];
const arrSize = arr.length;
const output = make_avg(arr, arrSize);
console.log(output);