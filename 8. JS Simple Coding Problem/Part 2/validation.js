function multiply (num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Please provide a number";
    }
    const mult = num1 * num2;
    return mult;
}
// const result = multiply(5, 7);
const result = multiply(5, 'seven');
console.log(result);


function fullName (first, last) {
    if (typeof first !== 'string' || typeof last !== 'string') {
        return "Please provide a string";
    }
    const full = first + ' ' + last;
    return full;
}
// const full = fullName('Rahul', "Kahul");
const full = fullName('Rahul', 7);
console.log(full);


function getPrice(product) {
    if (typeof product !== 'object') {
        return "Please provide an object";
    }
    const price = product.price;
    return price;
}
// const price = getPrice({name: 'chiruni', price: 40, color: 'black'});
const price = getPrice(5);
console.log(price);


function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return "Please provide an array";
    };
    const second = numbers[1];
    return second;
}
// const second = getSecond ([12, 4, 6, 15]);
const second = getSecond (45);
console.log(second);