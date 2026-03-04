/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required
 */

function calculateElectronicsBudget (laptopNum, tabletsNum, mobileNum) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;
    
    const total = laptopNum * laptop + tabletsNum * tablet + mobileNum * mobile;

    return total;
}

const output = calculateElectronicsBudget(2, 3, 7);
console.log(output);