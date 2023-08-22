// Array Creation
// Here we demonstrate different ways to create arrays and their usage.
const myArr = [0, 1, 2, 3, 4, 5]; // Creating an array using square brackets
const myHeroes = ["shaktiman", "naagraj"]; // Another example array with strings
const myArr2 = new Array(1, 2, 3, 4); // Creating an array using the Array constructor

console.log(myArr[1]); // Accessing and outputting the element at index 1: Output: 1

// Array Methods
// Demonstrating various methods to manipulate arrays.
myArr.push(6); // Appending element 6 to the end of 'myArr'
myArr.pop(); // Removing the last element from 'myArr'
myArr.unshift(9); // Adding element 9 to the beginning of 'myArr'
myArr.shift(); // Removing the first element from 'myArr'
console.log(myArr.includes(9)); // Checking if element 9 is present in 'myArr': Output: true
console.log(myArr.indexOf(3)); // Finding the index of element 3 in 'myArr': Output: 2
const newArr = myArr.join(); // Converting 'myArr' to a comma-separated string
console.log(myArr); // Outputting the modified 'myArr': Output: [1, 2, 3, 4, 5, 6]
console.log(newArr); // Outputting the 'newArr' string: Output: "1,2,3,4,5,6"

// slice and splice
// Illustrating the usage of slice and splice methods.
console.log("Original Array:", myArr);

const myn1 = myArr.slice(1, 3); // Creating a new array ('myn1') containing elements at indexes 1 and 2 from 'myArr'
console.log("Sliced Array (myn1):", myn1); // Output: [2, 3]
console.log("Original Array After Slice:", myArr); // 'myArr' remains unchanged

const myn2 = myArr.splice(1, 3); // Removing elements at indexes 1, 2, and 3 from 'myArr' and storing them in 'myn2'
console.log("Original Array After Splice:", myArr); // Output: [1, 6]
console.log("Spliced Elements (myn2):", myn2); // Output: [2, 3, 4]

// In this code, we've covered array creation, common methods for manipulation, and differences between 'slice' and 'splice'.