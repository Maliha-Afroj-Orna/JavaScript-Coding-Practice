const jim = 56;
const tim = 89;
const kim = 68;

// if-else condition
if (jim > tim && jim > kim) {
    console.log("Jim is the ultimate boss");
}
else if (tim > jim && tim > kim) {
    console.log("Tim is the ultimate boss");
}
else {
    console.log("Kim is the ultimate boss");
}

// function
function maxOfThree (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const max = maxOfThree(34, 67, 99);
console.log(max);

// Math.max()
const max2 = Math.max(12, 1, 57, 23, 98, 123, 11111);
console.log("Max using Math.max(): ", max2);