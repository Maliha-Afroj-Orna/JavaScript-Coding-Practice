const college = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
    },
};
// delete object
delete college.class;
console.log(college);