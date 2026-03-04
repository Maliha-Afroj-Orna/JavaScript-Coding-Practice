// Write a function to count the number of vowels in a string.

function countVowels(str) {
    const lowercaseStr = str.toLowerCase();
    let vowelsCount = 0;
    for(let i = 0; i < str.length; i++) {
        if(lowercaseStr[i] === 'a' || lowercaseStr[i] === 'e' || lowercaseStr[i] === 'i' || lowercaseStr[i] === 'o' || lowercaseStr[i] ==='u' ) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}
const output = countVowels("Maliha Afroj Orna");
console.log(output);