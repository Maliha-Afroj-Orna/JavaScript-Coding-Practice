function add(num1, num2) {
    console.log(num1, num2);
    // arguments only available inside function --> array like object
    console.log(arguments);
    console.log(arguments[3]);
}

// add(12, 13);
add(12, 13, 46, 59, 87);