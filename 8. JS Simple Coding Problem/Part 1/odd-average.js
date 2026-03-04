/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */
function oddAverage (numbers) {
    let sum = 0;
    let count = 0;
    for(const number of numbers) {
        if (number % 2 !== 0) {
            sum = sum + number;
            count++;
        }
    }
    let avg = sum / count;
    return avg;
}
const numbers = [42, 13, 58, 65, 81, 96, 7];
const average = oddAverage(numbers);
console.log("Odd Average: ", average);

