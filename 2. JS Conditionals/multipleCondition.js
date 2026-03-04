/**
 * && --> both condition true
 * || --> only one or both condition true
 * = --> value assign
 * == --> value comparison
*/
const salary = 25000;
const isBCS = true;
const height = 61;
const hasCar = false;

// if (salary > 20000 && height > 66) {
//     console.log("Su-----Patro");
// }
// else {
//     console.log("Onno patro kujte hbe");
// }

// if (salary > 25000 || height > 72) {
//     console.log("Accepted");
// }
// else {
//     console.log("Rejected");
// }

// more and more condition
// if (salary > 25000 || height > 72 || isBCS == true) {
//     console.log("Accepted");
// }
// else {
//     console.log("Rejected");
// }

// if (salary > 25000 && height > 72 && isBCS == true) {
//     console.log("Accepted");
// }
// else {
//     console.log("Rejected");
// }

// ------------------- COMPLEX CONDITION ----------------------
// if ((salary > 25000 && hasCar == true) || isBCS == true) {
//     console.log("Accepted");
// }
if ((salary > 25000 || hasCar == true) && isBCS == true) {
    console.log("Accepted");
}