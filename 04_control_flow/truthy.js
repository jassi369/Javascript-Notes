// Example of JavaScript Truthy and Falsy Values

// Let's begin by examining truthy and falsy values in JavaScript.
// Falsy values include: false, 0, -0, BigInt 0n, "", null, undefined, NaN.
// Truthy values encompass values that are not falsy, such as "0", 'false', " ", [], {}, and function(){}.

const userEmail = []; // An array to potentially hold user emails.

// Checking if a value is truthy or falsy using an if-else statement.
if (userEmail) {
    console.log("User email exists and is truthy.");
} else {
    console.log("User email does not exist or is falsy.");
}

// Checking if an array is empty using its length property.
if (userEmail.length === 0) {
    console.log("Array is empty.");
}

const emptyObj = {}; // An empty object to demonstrate object emptiness.

// Checking if an object is empty using the Object.keys() method.
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty.");
}

// Nullish Coalescing Operator (??):
// This operator provides a convenient way to handle null and undefined values.
// It returns the right-hand operand if the left-hand operand is null or undefined.

let val1;

// Using the Nullish Coalescing Operator to assign values to 'val1'.
val1 = 5 ?? 10;          // 5 (because 5 is not null or undefined)
val1 = null ?? 10;       // 10 (because null is replaced by the right-hand value)
val1 = undefined ?? 15;  // 15 (because undefined is replaced by the right-hand value)
val1 = null ?? 10 ?? 20; // 10 (first null is replaced, second null is ignored)

console.log(val1); // Output: 10

// Ternary Operator:
// The ternary operator is a concise way to write simple if-else statements.

const iceTeaPrice = 100;

// Using the ternary operator to determine if the ice tea price is less than or equal to 80.
iceTeaPrice <= 80 ? console.log("The price is less than or equal to 80.") : console.log("The price is more than 80.");
