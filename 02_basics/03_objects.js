// Introduction to Object Creation and Manipulation
// In this code, we explore object creation and manipulation using various techniques.

// Creating a Symbol
const mySym = Symbol("key1"); // Creating a unique symbol 'mySym'

// Object Literal
const JsUser = {
    name: "Hitesh", // Property storing the user's name
    "full name": "Hitesh Choudhary", // Property with a space in the key
    [mySym]: "mykey1", // Property with a symbol as the key
    age: 18, // Property storing the user's age
    location: "Jaipur", // Property storing the user's location
    email: "hitesh@google.com", // Property storing the user's email
    isLoggedIn: false, // Property indicating user's login status
    lastLoginDays: ["Monday", "Saturday"], // Property with an array value
};

// Accessing Object Properties
console.log("Accessing Property using Dot Notation:", JsUser.email);
console.log("Accessing Property using Bracket Notation:", JsUser["email"]);
console.log("Accessing Property with Space in Key:", JsUser["full name"]);
console.log("Accessing Property with Symbol Key:", JsUser[mySym]);

// Modifying Object Properties
JsUser.email = "hitesh@chatgpt.com"; // Modifying the 'email' property
// Object.freeze(JsUser); // Freezing the object to prevent further modifications
JsUser.email = "hitesh@microsoft.com"; // Attempting to modify 'email' after freezing
// console.log(JsUser); // Output: No changes in the object after freezing

// Adding Methods to the Object
JsUser.greeting = function() {
    console.log("Hello JS user"); // Adding a method 'greeting' to the object
};
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`); // Adding a method 'greetingTwo' with property reference
};

console.log("Calling 'greeting' Method:", JsUser.greeting()); // Output: "Hello JS user"
console.log("Calling 'greetingTwo' Method:", JsUser.greetingTwo()); // Output: "Hello JS user, Hitesh"

// This code illustrates object creation using object literals, property access and modification,
// using symbols as keys, adding methods to objects, and object freezing.