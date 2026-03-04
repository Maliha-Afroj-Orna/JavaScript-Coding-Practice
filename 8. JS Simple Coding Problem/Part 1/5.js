// Generate a random number between 10 to 20.

function randomNumberGenerator() {
    const random = Math.round(Math.random() * (20 - 10 + 1)) + 10;
    return random;
}

const random = randomNumberGenerator();
console.log(random);