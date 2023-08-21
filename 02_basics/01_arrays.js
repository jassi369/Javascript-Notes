// Array Creation
const myArr = [0, 1, 2, 3, 4, 5]; //Normal method to declare array
const myHeroes = ["shaktiman", "naagraj"]; 
const myArr2 = new Array(1, 2, 3, 4); // Declare an array 'myArr2' using the Array constructor

console.log(myArr[1]); // Output: 1 (access element at index 1)

// Array Methods
myArr.push(6); // Add 6 to the end of 'myArr'
myArr.pop(); // Remove the last element from 'myArr'
myArr.unshift(9); // Add 9 to the beginning of 'myArr'
myArr.shift(); // Remove the first element from 'myArr'
console.log(myArr.includes(9)); // Output: true (check if 9 is present)
console.log(myArr.indexOf(3)); // Output: 2 (index of element 3)
const newArr = myArr.join(); // Convert 'myArr' to a string separated by commas
console.log(myArr); // Output: [1, 2, 3, 4, 5, 6]
console.log(newArr); // Output: "1,2,3,4,5,6"

// slice and splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3); // Create a new array from 'myArr' with elements 1 and 2
console.log(myn1); // Output: [2, 3]
console.log("B", myArr); // 'myArr' is unchanged

const myn2 = myArr.splice(1, 3); // Remove elements 1, 2, and 3 from 'myArr'
console.log("C", myArr); // Output: [1, 6]
console.log(myn2); // Output: [2, 3, 4]


