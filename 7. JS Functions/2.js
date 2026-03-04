// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOrOdd(number) {
    if (number % 2 !== 0) {
        const result = number * 2;
        return result;
    } else {
        const result = number / 2;
        return result;
    }
} 
const output = evenOrOdd(3);
console.log(output);