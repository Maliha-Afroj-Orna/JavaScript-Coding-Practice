const disha = 56;
const salman = 95;

// if-else condition
if (disha > salman) {
    console.log("Disha will get the strawberry");
}
else {
    console.log("Salman will get the strawberry");
}

// inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax(96, 78);
const max2 = getMax(67, 98);
const ultimateMax = getMax(max1, max2);
console.log("Max of two is: ", ultimateMax);

