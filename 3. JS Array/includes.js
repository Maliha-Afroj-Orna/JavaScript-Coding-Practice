const friends = ['balam', 'kalam', 'salam', 'pailam', 'gelam', 'chollam'];

// includes()
console.log(friends.includes('gelam'));
console.log(friends.includes('khailam'));

if(friends.includes('khailam')) {
    console.log("party");
}
else {
    console.log("no food");
}