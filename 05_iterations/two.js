// Introduction to Looping Constructs
// In this code, we delve into different loop constructs and their practical applications.

// While Loop: Incrementing by 2
let index = 0; // Initializing the index variable
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2; // Incrementing the index by 2
}

// While Loop: Iterating Through an Array
let myArray = ['flash', "batman", "superman"];
let arr = 0; // Initializing the array index
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1; // Incrementing the array index
}

// Do-While Loop: Demonstrating Loop Execution at Least Once
let score = 11; // Initializing the score variable
do {
    console.log(`Score is ${score}`);
    score++; // Incrementing the score
} while (score <= 10); // Loop continues as long as score is less than or equal to 10

// Best Practices and Explanations
// - The 'while' loop repeatedly executes a block of code as long as the given condition is true.
// - It's essential to ensure that the condition will eventually become false; otherwise, the loop will run indefinitely (infinite loop).
// - In the first 'while' loop, we start with 'index' at 0 and increment it by 2 in each iteration, printing even numbers up to 10.
// - In the second 'while' loop, we iterate through the 'myArray' and print its elements one by one.
// - The 'do-while' loop is similar to the 'while' loop, but it ensures that the code block executes at least once before checking the condition.
// - In the 'do-while' loop, we showcase that the code block executes once even though the initial score is greater than 10.

// Best Practices:
// - Use 'for' loops when you know the number of iterations in advance, and 'while' or 'do-while' loops when the number of iterations is variable.
// - Always make sure the loop's exit condition will eventually become false to avoid infinite loops.
// - Keep the code inside loops concise and clear to enhance readability.
// - Avoid unnecessary or complex calculations within the loop's condition to improve performance.
// - Use meaningful variable names to enhance code readability.
// - Regularly review and test your loops to ensure they behave as expected.
// - Use modern loop constructs like 'for...of' for iterating over arrays, and 'for...in' for object properties.

// This code provides an overview of different looping constructs, their applications, and best practices for writing effective loops.