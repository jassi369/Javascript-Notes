// Function Basics and Declaration
// 1. A function is a block of code that can be called multiple times to execute its statements.

// Declaration of a simple function
function sayHello() {
    console.log("This is a sample function!");
}

// Calling the function
sayHello();

// Function with Multiple Lines of Code
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// Calling the sayMyName function
sayMyName();

// Function Parameters and Return
function addTwoNumbers(number1, number2) {
    // Calculate the sum of two numbers
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);

// Default Parameter and Early Return
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// Function with Rest Parameter
function calculateCartPrice(val1, val2, ...prices) {
    return prices;
}

// Object as a Parameter
const user = {
    username: "hitesh",
    price: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Calling handleObject function with an object
handleObject(user);

// Function that Returns Second Value from an Array
function returnSecondValue(getArray) {
    return getArray[1];
}

// Calling the returnSecondValue function with an array
console.log(returnSecondValue([200, 400, 500, 1000]));
