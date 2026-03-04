const college = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top',
        },
    },
};

console.log(college.unique.color);

college.unique.result.merit = 'top top top most';
console.log(college.unique.result.merit);
console.log(college['unique'].result.gpa);

college.events[1] = '16 December';
console.log(college.events[1]);