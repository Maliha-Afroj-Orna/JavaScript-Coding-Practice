/**
 * TERNARY --> 3 parts
 * 
 * condition ? true : false
 * 
 * let --> value can be changed
 * const --> value can not be changed
 */

const age = 20;
age >= 18 ? console.log("Vote") : console.log("Can't Vote");

let price = 500;
const isLeader = true;
price = isLeader === true ? 0 : price + 100; 

// ------ OPTIONAL SEMI-ADVANCED TERNARY -----------
price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 100;


// if (isLeader === true) {
//     if (price > 1000) {
//         price = price / 2;
//     }
//     else {
//         price = 0;
//     }
// }
// else {
//     price = price + 100;
// }

// let price = 500;
// const isLeader = true;

// if (isLeader === true) {
//     price = 0;
// }
// else {
//     price = price + 100;
// }
// console.log(price);



// if (age >= 18) {
//     console.log("You can vote");
// }
// else {
//     console.log("You can not vote");
// }