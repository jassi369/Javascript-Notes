const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach to iterate through the 'coding' array
// and print each language to the console
coding.forEach(function (language) {
    console.log(language);
});

// Using an arrow function to achieve the same result
coding.forEach((language) => {
    console.log(language);
});

// Defining a separate function 'printMe' to print a value
function printMe(item) {
    console.log(item);
}

// Using the 'printMe' function to iterate through the 'coding' array
coding.forEach(printMe);

// Using an arrow function to access the index and the array itself
coding.forEach((language, index, array) => {
    console.log(language, index, array);
});

// An array of programming languages with additional information
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

// Using forEach to iterate through the 'myCoding' array of objects
// and printing each language's name to the console
myCoding.forEach((languageObject) => {
    console.log(languageObject.languageName);
});
/* Best Practices:

    1.Use arrow functions for concise syntax when the function body is short.
    2.If you need to access the current element's index or the original array, provide parameters
         in the callback function signature ((element, index, array) => {...}).
    3.Using meaningful function names like printMe makes your code more readable and maintainable.
    4.In real-world scenarios, consider using map, filter, or reduce methods if you need to transform 
        or manipulate array elements, as they provide more expressive ways to work with arrays.
    5.When working with complex data structures like the myCoding array of objects, consider' 
        using object destructuring to improve code readability.
*/