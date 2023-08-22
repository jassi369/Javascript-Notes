// Exploring Iteration and Mapping
// In this code, we delve into looping constructs and map objects for data manipulation.

// Object Iteration using 'for...in' Loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    const value = myObject[key]; // Accessing the value using the key
    console.log(`${key} is a shortcut for ${value}`); // Outputting key-value pairs
}

// Array Iteration using 'for...in' Loop
const programmingLanguages = ["js", "rb", "py", "java", "cpp"];

for (const index in programmingLanguages) {
    const language = programmingLanguages[index]; // Accessing the element at the index
    console.log(`Programming language at index ${index}: ${language}`); // Outputting array elements
}

// Map Data Structure
const countryMap = new Map(); // Creating a new Map
countryMap.set('IN', "India"); // Adding key-value pairs to the Map
countryMap.set('USA', "United States of America");
countryMap.set('Fr', "France");
countryMap.set('IN', "India"); // Overwriting value for the key 'IN'

// Looping through Map using 'for...of' Loop
for (const [key, value] of countryMap) {
    console.log(`Country code '${key}' corresponds to '${value}'`); // Outputting Map entries
}

// Explanation and Best Practices
// - In the first loop, we iterate through the properties of 'myObject' using the 'for...in' loop,
//   accessing values using keys and displaying key-value pairs.
// - In the second loop, we use 'for...in' to iterate through 'programmingLanguages' array indexes
//   and output each programming language at the corresponding index.
// - The 'Map' is a key-value store with unique keys. We create a map 'countryMap' and populate it with country codes and names.
// - To iterate through a 'Map', we use the 'for...of' loop, destructuring the entries into 'key' and 'value' variables.
// - The 'for...of' loop is preferable for iterating over arrays and 'Map' objects as it's more concise and avoids pitfalls of 'for...in'.
// - It's good practice to use 'const' for the loop variable when you don't intend to modify it within the loop body.

// Best Practices:
// - Use 'for...in' loop for iterating through object properties and 'for...of' loop for arrays and 'Map' objects.
// - Avoid using 'for...in' loop for arrays as it iterates through indexes and can have unexpected behavior when custom properties exist.
// - When using 'Map', ensure keys are unique, as duplicates overwrite the existing values.
