const school = 'RAJ UK Uttara Model School';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

// uppercase: ABCD EFJ
// lowercase: abcd efj
const subject = 'Chemistry';
const book = 'chemIsTry';

if(subject.toLowerCase() === book.toLowerCase()) {
    console.log("Great Work");
}
else {
    console.log("Not Great");
}

// trim()
const drink = ' water';
const liquid = '   water   ';

if(drink.trim() === liquid.trim()) {
    console.log("Panir opor name jibon");
}
else {
    console.log("Not Pani");
}
