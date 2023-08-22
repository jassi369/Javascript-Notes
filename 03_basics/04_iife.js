// Understanding Immediately Invoked Function Expressions (IIFE)

// An Immediately Invoked Function Expression (IIFE) is a self-executing function that
// is defined and executed in a single step. It is often used to create a private scope,
// prevent global pollution, and achieve encapsulation.

// Named IIFE
(function databaseConnection() {
    console.log(`Database connected.`);
})();
// This named IIFE is invoked immediately and its code is executed.

// Using Arrow Function in IIFE
((name) => {
    console.log(`Database connected using Arrow Function. Hello, ${name}!`);
})('hitesh');
// This arrow function-based IIFE is invoked immediately and its code is executed.

// Explanation of IIFE:
// - IIFE is a design pattern that helps encapsulate code within its own scope.
// - The function is enclosed in parentheses to avoid issues with JavaScript syntax.
// - Adding parentheses at the end invokes the function immediately upon definition.
// - IIFE can take parameters, making it flexible and versatile.
// - In the example above, the first IIFE is named, while the second one uses an arrow function.

// Note: With the advent of modern JavaScript and ES6 modules, IIFE usage has decreased,
// as these modules offer a cleaner way to encapsulate code and manage dependencies.
