// Count how many times a string has the letter a or A

const name = "Maliha Afroj Orna";

let letter = "a";
let letterCount = 0;

for (let i = 0; i < name.length; i++) {
  if (name[i].toLowerCase() === letter) {
    letterCount++;
  } 
}
console.log("Total a or A Letter: ", letterCount);
