// Primitive Data Types
// There are 7 primitive data types in JavaScript: String, Number, Boolean, null, undefined, Symbol, BigInt.

// Number - Represents numeric values
const score = 100; 
const scoreValue = 100.3; // A floating-point number

// Boolean - Represents true or false values
const isLoggedIn = false; 

// null - Represents the intentional absence of any value
const outsideTemp = null; 

// undefined - Represents a variable that has been declared but hasn't been assigned a value yet
let userEmail; 

// Symbol - Represents a unique and immutable value, often used as an object property identifier
const id = Symbol("123"); 
const anotherId = Symbol("123"); 

console.log(id === anotherId); // Output: false (Symbols are unique)

// BigInt - Represents larger integers than the Number type can represent
const bigNumber = 3456543576654356754n; 

// Reference (Non-primitive) Data Types
// These data types hold references to values stored elsewhere in memory.

// Array - A collection of values
const heros = ["shaktiman", "naagraj", "doga"]; 

// Object - A collection of key-value pairs
let myObj = {
  name: "hitesh",
  age: 22,
}; 

// Function - A block of code that can be invoked
const myFunction = function () {
  console.log("Hello world");
};

// Demonstrating the typeof operator
console.log(typeof anotherId); // Output: "symbol"
