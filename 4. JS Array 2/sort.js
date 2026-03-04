/**
 * sort() --> [4, 7, 2, 6, 3, 1]
 *    1. Ascending - smaller to larger - [1, 2, 3, 4, 6, 7]
 *    2. Descending - larger to smaller - [7, 6, 4, 3, 2, 1]
 * numbers = [] --> [...numbers] --> copy the main array
 */
const persons = ["rakib", "takib", "sakib", "lakib", "nokib"];
const sortedPersons = persons.sort();
console.log(sortedPersons);

const numbers = [4, 7, 2, 6, 3, 1];
// sort() - Ascending
const numbers_asc = numbers.sort();
console.log(numbers_asc);


const numbers2 = [4, 7, 12, 8, 43, 6, 1];
// const numbers2_asc = numbers2.sort(); // not working
// sort() - Ascending
const numbers2_asc = [...numbers2].sort(function(a, b) {return a - b });
// sort() - Descending
const numbers2_desc = [...numbers2].sort(function(a, b) {return b - a });
console.log(numbers2_asc);
console.log(numbers2_desc);

