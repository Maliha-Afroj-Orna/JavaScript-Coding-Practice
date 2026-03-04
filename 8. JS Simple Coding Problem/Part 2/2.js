// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallestName = heights2[0];
for(let height of heights2) {
    if(height.length < smallestName.length) {
        smallestName = height
    }
}
console.log(smallestName);

