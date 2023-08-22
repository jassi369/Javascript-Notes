// Understanding JavaScript Conditional Statements

// Conditional statements are fundamental constructs in programming,
// allowing us to execute different code paths based on conditions.

// Defining variables for demonstration
const isUserLoggedIn = true;
const temperature = 41;

// Using if statement to handle temperature condition
if (temperature < 50) {
    console.log("Temperature is less than 50.");
} else {
    console.log("Temperature is greater than or equal to 50.");
}

// Comparison operators: <, >, <=, >=, ==, !=, ===, !==
// These operators allow us to compare values and make decisions based on the results.

// Example of if statement with variable scope
const score = 200;
if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}
// The 'power' variable is only accessible within the block where it's defined.

// Handling multiple conditions using if-else if-else chains
const balance = 1000;
if (balance < 500) {
    console.log("Balance is less than 500.");
} else if (balance < 750) {
    console.log("Balance is less than 750.");
} else if (balance < 900) {
    console.log("Balance is less than 900.");
} else {
    console.log("Balance is at least 900.");
}

// Combining conditions using logical operators (&&, ||)
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Using logical AND (&&) to check multiple conditions
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course.");
}

// Using logical OR (||) to check at least one true condition
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in.");
}

// Explanation of Code:
// - The code demonstrates the use of if statements to control the flow of execution based on conditions.
// - Comparison operators (<, >, <=, >=, ==, !=, ===, !==) are used to evaluate conditions.
// - The example with the score demonstrates variable scope inside an if block.
// - An if-else if-else chain handles multiple conditions.
// - Logical operators (&&, ||) are used to combine conditions for more complex checks.
