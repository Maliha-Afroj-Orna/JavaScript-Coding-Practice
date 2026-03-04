// 1 feet = 12 inch
// 75 inch = 6.25 feet
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const suvoHeight = inchToFeet(75);
console.log("Suvo Height: ", suvoHeight);

// 75 inch = 6 feet 3 inch
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch.";
  return result;
}
const myHeight = inchToFeet2(75);
console.log("My Height: ", myHeight);

// 1 mile = 1.60934 kilometer
function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const kilometer = mileToKilometer(25);
console.log("Kilometer: ", kilometer);

// 1 kilometer = 0.621371 miles
function kilometerToMiles(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}
const Miles = kilometerToMiles(50);
console.log("Miles: ", Miles);
