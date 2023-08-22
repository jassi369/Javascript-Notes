// Understanding JavaScript Functions, Arrow Functions, and 'this'

// In JavaScript, functions are a core concept, providing reusable blocks of code.
// Arrow functions are a more concise way to write functions, and 'this' refers
// to the context in which a function is executed.

// Creating an object 'user' with properties and a method
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website.`);
        console.log(this); // 'this' refers to the 'user' object
    }
};

// Calling the 'welcomeMessage' method of the 'user' object
user.welcomeMessage(); // Output: "hitesh, welcome to the website."

// Modifying a property and observing 'this' context
user.username = "sam"; // Changing the 'username' property
user.welcomeMessage(); // Output: "sam, welcome to the website."

// 'this' in Global Scope
console.log(this); // 'this' in global scope refers to the global object (e.g., window in browsers)

// Using 'this' in a regular function
function chai() {
    let username = "hitesh";
    console.log(this.username); // 'this' has different context
}
chai(); // Output: undefined

// Using 'this' with Arrow Functions
const chai = () => {
    let username = "hitesh";
    console.log(this); // 'this' behaves differently in arrow functions
};
// Arrow functions capture 'this' lexically, often leading to the global object

// Arrow Function for Adding Two Numbers
const addTwo = (num1, num2) => num1 + num2; // Concise arrow function syntax
const addTwo = (num1, num2) => {
    return num1 + num2;
};
const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({username: "hitesh"});
console.log(addTwo(3, 4)); // Output: 7

// Array forEach() Method
const myArray = [2, 5, 3, 7, 8];
myArray.forEach((element) => {
    console.log(element);
});
// The forEach() method iterates over array elements and executes a provided function for each element.

// Explanation:
// - The 'user' object demonstrates a method inside an object.
// - 'this' refers to the object where the method is called ('user' in this case).
// - Regular functions and arrow functions handle 'this' differently.
// - Arrow functions often capture 'this' from their surrounding context.
// - Arrow functions are concise alternatives for writing functions.
// - The 'forEach' method iterates over array elements and executes a provided function.
