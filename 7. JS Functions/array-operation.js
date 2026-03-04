/**
 * Objective: write a function to give me the sum of all the numbers in an array.
 *      step 1: declare a function
 *      step 2: call & check whether the function is called properly
 *      step 3: set a parameter(s)
 *      step 4: pass the parameter(s), check whether parameter is passed in a proper format.
 *      step 5: do the function tasks (step by step)
 */

function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers) {
        sum = sum + number;
    }
    return sum;
}
const numbs = [1, 4, 7, 3];
const sum = sumOfNumbers(numbs);
console.log("Sum of Numbers: ", sum);