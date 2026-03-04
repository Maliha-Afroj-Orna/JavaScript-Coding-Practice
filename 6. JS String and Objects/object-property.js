const person = {
    name: 'Sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandarbon', 'saintmartin', 'kuakata'],
};

console.log(person);

// dot (.) notation --> dot symbol (.) diye object er property er value access kora
console.log(person.profession);
const income = person.salary;
console.log(income);

// bracket notation --> third bracket [] diye object er property er value access kora
console.log(person['age']);
const boyos = person['age'];
console.log(boyos);
console.log(person['fav places']);

const keyName = 'profession';
console.log(person[keyName]);

