// Exploring Variable Declarations with 'let' and 'const'
// We begin by declaring a global variable 'a' with the value 300.
let a = 300;

// Understanding Block Scope and Variable Visibility
// Inside this block, a new variable 'a' is declared with the value 10, which is confined to this block's scope.
// Additionally, a constant 'b' is declared with the value 20, also limited to this block's scope.
if (true) {
    let a = 10; // 'a' within local scope, separate from the global 'a'
    const b = 20; // Declare and initialize a constant 'b' within local scope
    // console.log("INNER: ", a); // Output: 10 (local scope)
}

// console.log(a); // Output: 300 (global scope)
// console.log(b); // Error: 'b' is not defined (out of scope)

// Embracing Function Scope and Closure
// In this function, a constant 'username' is declared with the value "hitesh".
function one() {
    const username = "hitesh";

    // Within the 'one' function, the 'two' function is defined.
    // Inside 'two', a constant 'website' is declared with the value "youtube".
    // 'two' has access to the 'username' from its parent function due to closure.
    function two() {
        const website = "youtube";
        console.log(username); // Output: "hitesh"
    }
    // console.log(website); // Error: 'website' is not defined (out of scope)

    two(); // Calling the 'two' function
}

// one(); // Uncomment this line to invoke the 'one' function

// Navigating Nested Scopes and Variable Visibility
// Inside this block, a constant 'username' is declared with the value "hitesh".
// Further nested, a check is performed, and if the condition is met, a constant 'website' is declared with the value "youtube".
if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website); // Error: 'website' is not defined (out of scope)
}

// Examining Function Declaration and Hoisting
// Function declarations are hoisted, allowing us to call 'addone' before its actual declaration.
console.log(addone(5)); // Output: 6 (function is hoisted)

function addone(num) {
    return num + 1;
}

// Investigating Function Expression and Hoisting
// Function expressions are not hoisted, so trying to call 'addTwo' before its declaration will result in an error.
// const addTwo = function(num) {
//     return num + 2;
// };
// addTwo(5); // Error: Cannot access 'addTwo' before initialization

// Defining 'addTwo' using a function expression and then calling it.
const addTwo = function(num) {
    return num + 2;
};
console.log(addTwo(5)); // Output: 7
