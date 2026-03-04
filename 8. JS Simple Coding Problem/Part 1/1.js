// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}
const output = celsiusToFahrenheit(90);
console.log(output);