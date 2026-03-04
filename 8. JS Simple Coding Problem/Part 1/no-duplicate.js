/**
 * array has some duplicate elements
 */

function noDuplicate (array) {
    const unique = [];
    for(const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const students = ['abul', 'babul', 'cabul', 'abul', 'kabul', 'babul', 'dabul', 'cabul', 'abul'];

const numbers = [1, 5, 62, 5, 3, 1, 8, 1, 9, 1, 5];

const uniqueArray = noDuplicate(students);
console.log(uniqueArray);
