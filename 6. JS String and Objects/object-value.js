const person = {
    name: 'Sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandarbon', 'saintmartin', 'kuakata'],
};
// dot (.) notation
person.salary = 30000;

// bracket [] notation
person['age'] = 26;
person['fav places'] = ['Maldives', 'Bali', 'Pataya'];

const propName = 'profession';
person[propName] = 'worker';

console.log(person);

