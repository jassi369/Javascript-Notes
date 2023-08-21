// Variable Declaration and Initialization
let score = "hitesh"; // Declare a variable 'score' and assign the value "hitesh"

// Type Conversion: String to Number
let valueInNumber = Number(score); // Convert 'score' (string) to a number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// Type Conversion: String to Boolean
let isLoggedIn = "hitesh"; // Declare a variable 'isLoggedIn' with the value "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn); // Convert 'isLoggedIn' to a boolean
// console.log(booleanIsLoggedIn);

// Type Conversion: Number to String
let someNumber = 33; // Declare a variable 'someNumber' with the value 33
let stringNumber = String(someNumber); // Convert 'someNumber' to a string
// console.log(stringNumber);
// console.log(typeof stringNumber);

// Mathematical Operations
let value = 3; // Declare a variable 'value' with the value 3
let negValue = -value; // Calculate the negative of 'value'
console.log(negValue);

// String Concatenation
let str1 = "hello"; // Declare a string variable 'str1' with value "hello"
let str2 = " hitesh"; // Declare another string variable 'str2' with value " hitesh"
let str3 = str1 + str2; // Concatenate 'str1' and 'str2'
console.log(str3);

// Basic Arithmetic Operations
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

// Type Coercion in String Concatenation
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// Order of Operations
console.log((3 + 4) * 5 % 3);

// Unary Plus Operator
console.log(+true);
console.log(+"");

// Chained Assignment
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

// Increment Operator
let gameCounter = 100; // Declare a variable 'gameCounter' with the value 100
++gameCounter; // Increment 'gameCounter' by 1
console.log(gameCounter); // Output the incremented value (101) of 'gameCounter' to the console

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion