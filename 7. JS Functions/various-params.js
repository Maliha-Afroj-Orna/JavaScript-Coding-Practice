/**
 * for a given string tell me  whether is has even number of characters or not
 */
// parameter --> string
function evenSizedString (str) {
    const strSize = str.length;
    console.log(str, strSize);
    if(strSize % 2 === 0) {
        console.log("Even Size");
        return true;
    }
    else {
        console.log("Odd Size");
        return false;
    }
}
evenSizedString("Maliha");
evenSizedString("Dhaka");

// parameter --> boolean
function doubleOrTriple(number, doDouble) {
    if(doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(7, false));

// parameter --> array
function numberOfElements(numbers) {
    const len = numbers.length;
    return len;
}

console.log(numberOfElements([12, 43, 55, 3]));

// parameter --> object
function getAge(person) {
    const age = person.age;
    return age;
}