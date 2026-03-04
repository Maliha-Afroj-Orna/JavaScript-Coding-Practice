// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let sentence = "I am Maliha. Its my job to do x-ray. not X-ray";

if ('x' || 'X') {
  let result = sentence.replaceAll("x", "y").replaceAll("X", "Y");
  console.log(result);
}
