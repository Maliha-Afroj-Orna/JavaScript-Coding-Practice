/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 25;
let isStudent = false;
let ticketPrice = 800;

if (age < 10) {
    console.log("free");
}
else if (isStudent) {
    // 50% discount
    const discount = ticketPrice * 50 / 100;
    const payAmount = ticketPrice - discount;
    console.log(payAmount);
}
else if (age >= 60) {
    // 15% discount
    const discount = ticketPrice * 15 / 100;
    const payAmount = ticketPrice - discount;
    console.log(payAmount);
}
else {
    console.log(ticketPrice);
}