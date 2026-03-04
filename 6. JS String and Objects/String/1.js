// Count how many times a string has the letter a

const name = "Maliha Afroj Orna";

let letter = "a";
let count = 0;

for (let i = 0; i < name.length; i++) {
  if (name[i] === letter) {
    count++;
  }
}
console.log("Total a: ", count);
