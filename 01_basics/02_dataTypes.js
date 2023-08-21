"use strict"; // Enforces strict mode for better coding practices

// Example of basic operations and maintaining readability
console.log(3 + 3); // Output: 6

// Logging with formatted expressions for readability
console.log(3 +
    3); // Output: 6

// Outputting strings to the console
console.log("Hitesh"); // Output: Hitesh

// Variable Declarations and Data Types
let name = "Hitesh"; // String variable named 'name'
let age = 18; // Number variable named 'age'
let isLoggedIn = false; // Boolean variable named 'isLoggedIn'
let state; // Undefined variable named 'state'

// Explaining Data Types
// JavaScript has various data types including numbers, strings, booleans,
// null, undefined, and symbols. Here's an example showcasing them:

let numberValue = 42; // Number data type
let stringValue = "Hello, world!"; // String data type
let booleanValue = true; // Boolean data type
let nullValue = null; // Null data type
let undefinedValue; // Undefined data type
let symbolValue = Symbol("unique"); // Symbol data type

// Output the typeof each value:
console.log(typeof undefinedValue); // Output: "undefined"
console.log(typeof nullValue); // Output: "object"

// Symbol
console.log(symbolValue); // Output: Symbol(unique)

// Bigint (Starting from ES11)
let bigintValue = 1234567890123456789012345678901234567890n; // Bigint data type

// Output the bigint value
console.log(bigintValue); // Output: 1234567890123456789012345678901234567890n
