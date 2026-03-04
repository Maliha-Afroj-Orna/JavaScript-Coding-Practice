const country = 'Bangladesh';
const division = "Dhaka";
const district = `Gazipur`;
const thana = new String('Demra');

// string is immutable --> Not Changeable
const capital = 'Dha ka';
console.log(capital.length);
console.log(capital[0]);



// console.log(typeof country);
// console.log(typeof division);
// console.log(typeof district);
// console.log(typeof thana);


// Array is mutable --> Changeable
const numbers = [12, 34, 45, 23, 76, 11];
// console.log(numbers.length);
// console.log(numbers[0]);
console.log(numbers);
numbers[1] = 122;
console.log(numbers);