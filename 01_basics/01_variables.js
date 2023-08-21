// Variable Declaration (const, let, var)
const age = 25; // A constant variable with a fixed value
let name = "Alice"; // A variable that can be reassigned
var city = "New York"; // An older way to declare variables (avoid in modern JS)

// Reassigning Values
name = "Bob"; // The 'let' variable 'name' is reassigned to "Bob"
age = 30; // Error: Trying to reassign a 'const' variable (will result in a TypeError)

// Output (console.log())
console.log("Hello, " + name + "! You are " + age + " years old.");
// Output: Hello, Bob! You are 25 years old.

// Comments and Best Practices
// This is a single-line comment
/*
  This is a multi-line comment.
  Use comments to explain code and make it easier for others to understand.
  Follow best practices for variable naming and indentation.
*/

// Implicit Global Variable Declaration
function sayHello() {
  newVar = "I'm a global variable"; // Implicitly creates a global variable (not recommended)
  console.log(newVar);
}

sayHello(); // Output: I'm a global variable
console.log(newVar); // Output: I'm a global variable (accessing outside the function)

// Console Table Output (console.table())
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 28 }
];

console.table(students);
// Output in a tabular format:
// ┌───────┬───────┬─────┐
// │ (index) │  name   │ age │
// ├───────┼───────┼─────┤
// │    0    │ 'Alice' │  25  │
// │    1    │  'Bob'  │  30  │
// │    2    │ 'Carol' │  28  │
// └───────┴───────┴─────┘
