// function vaatKhao () {
//     console.log("hand wash korey asho.");
//     console.log("sit down");
//     console.log("plate e khabar nao.");
//     console.log("khao.");
// }
// vaatKhao();


// square a number
// 3 --> 3 * 3 = 9
// 4 --> 4 * 4 = 16
// 5 --> 5 * 5 = 25
// 11 --> 11 * 11 = 121
function square (number) {
    console.log("Value of the number parameter: ", number);
    const square = number * number;
    console.log("Square of the number: ", square);
}
square(4);
console.log('-----------------------------');
square(12);
square(5);
square(405);


// add 2 number
function add (num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}
add(5, 10);
add(65, 31);


function addAll (a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(total);
}
addAll(1, 2, 3, 5, 1);