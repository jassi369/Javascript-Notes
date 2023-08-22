// Example of JavaScript Switch Statement

// The switch statement is used to perform different actions based on different conditions.
// It evaluates an expression, matches its value with case labels, and executes code accordingly.

// Defining a variable 'month' to hold the value of the current month.
const month = "march";

// Using a switch statement to determine the actions based on the value of 'month'.
switch (month) {
    case "jan":
        // If 'month' is "jan", this block will execute.
        console.log("The month is January.");
        break;
    case "feb":
        // If 'month' is "feb", this block will execute.
        console.log("The month is February.");
        break;
    case "march":
        // If 'month' is "march", this block will execute.
        console.log("The month is March.");
        break;
    case "april":
        // If 'month' is "april", this block will execute.
        console.log("The month is April.");
        break;

    default:
        // If 'month' doesn't match any of the cases, this block will execute.
        console.log("No specific month match. Default case executed.");
        break;
}

// Output:
// The month is March.

// Explanation of the switch statement:
// - The value of the 'month' variable ("march") is evaluated against each case label.
// - Since it matches the case label "march", the corresponding block of code is executed.
// - The 'break' statement after each case block ensures that only the matching case's code runs.
// - If no cases match, the code inside the 'default' block is executed as the final fallback.
