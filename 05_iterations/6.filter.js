// An array of programming language abbreviations
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach to iterate through the 'coding' array and print each language
coding.forEach((language) => {
    console.log(language);
    // Note: forEach does not create a new array. It's for performing side effects.
    // No values are returned or accumulated by forEach.
});

// Attempting to assign the result of 'coding.forEach' to 'values' - it will be undefined
const values = coding.forEach((language) => {
    console.log(language);
    // 'forEach' does not return a value, hence 'values' will be undefined
});

console.log(values); // This will output 'undefined'

// An array of numbers
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using 'filter' to create a new array with numbers greater than 4
const newNums = myNums.filter((num) => {
    return num > 4;
});
console.log(newNums); // This will output [5, 6, 7, 8, 9, 10]

// Alternatively, achieving the same result using 'forEach' and pushing into a new array
const newNums = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});
console.log(newNums); // This will output [5, 6, 7, 8, 9, 10]

// An array of book objects with various properties
const books = [
    // ... (book objects)
];

// Using 'filter' to find books with the genre 'History'
let userBooks = books.filter((book) => book.genre === 'History');

// Using 'filter' to find books published after 1995 and with the genre 'History'
userBooks = books.filter((book) => {
    return book.publish >= 1995 && book.genre === 'History';
});
console.log(userBooks);

// Best Practices:

// Use 'map' when you want to transform each element of an array.
// Use 'filter' when you want to create a new array based on certain criteria.
// Use 'forEach' when you want to iterate over an array and perform side effects (like printing).
// When using 'filter', ensure your filtering condition is clear and specific.
// Prefer using modern ES6 arrow functions for conciseness and readability.
// Use meaningful variable names to enhance code clarity.
