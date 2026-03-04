/**
 * Create a function that will return only the even numbers
 * Return the sum of even numbers
 */
// return only even numbers
function evenNumbersOnly (numbers) {
    const evens = [];
    for(const number of numbers) {
        if(number % 2 === 0) {
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [23, 12, 55, 4, 8];
const evenNumbers = evenNumbersOnly(numbers);
console.log("Even Numbers: ", evenNumbers);

// return sum of even numbers
function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for(const number of numbers) {
        if(number % 2 === 0) {
            sum = sum + number;
        }
    }
    return sum;
}
const numbs = [13, 2, 65, 4, 8];
const sumOfEven = sumOfEvenNumbers(numbs);
console.log("Sum of Even Numbers: ", sumOfEven);