const score = 400; 
// console.log(score);

const balance = new Number(100); // Create a Number object using the Number constructor
// console.log(balance);

// Number Methods
console.log(balance.toString().length); // convert the value of an object to a string representation
console.log(balance.toFixed(1)); // method is used to format a number with a specified number of decimal places.

const otherNumber = 123.8966; 
console.log(otherNumber.toPrecision(4)); // Precision of total 4 numbers in the example

const hundreds = 1000000; 
console.log(hundreds.toLocaleString('en-IN'));

// Math Object and Methods
console.log(Math); // Output: The Math object, which provides mathematical functions and constants

console.log(Math.abs(-4)); // Output: 4 (absolute value of -4) It will return the positive value regardless of its orignal value

console.log(Math.round(4.6)); // Output: 5 (rounds 4.6 to the nearest integer)

console.log(Math.ceil(4.2)); // Output: 5 (rounds up to the nearest integer)

console.log(Math.floor(4.9)); // Output: 4 (rounds down to the nearest integer)

console.log(Math.min(4, 3, 6, 8)); // Output: 3 (smallest value among 4, 3, 6, and 8)

console.log(Math.max(4, 3, 6, 8)); // Output: 8 (largest value among 4, 3, 6, and 8)


// Random Numbers
console.log(Math.random()); // Output: Random number between 0 and 1
console.log((Math.random() * 10) + 1); // Output: Random number between 1 and 11
console.log(Math.floor(Math.random() * 10) + 1); // Output: Random integer between 1 and 10

const min = 10; // Declare a constant variable 'min' with the value 10
const max = 20; // Declare a constant variable 'max' with the value 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: Random integer between min and max (inclusive)
