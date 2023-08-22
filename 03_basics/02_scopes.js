// Variable Declarations with let and const
let a = 300; // Declare 'a' with the value 300

// Block Scope and Variable Visibility
if (true) {
    let a = 10; // Declare 'a' with the value 10 (local scope)
    const b = 20; // Declare 'b' with the value 20 (local scope)
    // console.log("INNER: ", a);
}

// console.log(a); // Output: 300 (global scope)
// console.log(b); // Error: 'b' is not defined (out of scope)

// Function Scope and Closure
function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // Error: 'website' is not defined (out of scope)

    two();
}

// one();

// Nested Scopes and Variable Visibility
if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website); // Error: 'website' is not defined (out of scope)
}

// Function Declaration and Hoisting
console.log(addone(5)); // Output: 6 (function is hoisted)

function addone(num) {
    return num + 1;
}

// Function Expression and Hoisting
// addTwo(5); // Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};

// Calling the addTwo function
console.log(addTwo(5)); // Output: 7
