// String and Number Constants
const name = "hitesh"; 
const repoCount = 50; 

// String Concatenation vs. Template Literal
// console.log(name + repoCount + " Value"); // String concatenation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Template Literal

// Creating a String Object using the String Constructor
const gameName = new String('hitesh-hc-com'); 

// Accessing Characters and Prototype
console.log(gameName[0]);
console.log(gameName.__proto__);

// String Length and Methods
console.log(gameName.length); // Length of the string
console.log(gameName.toUpperCase()); // Convert the string into UPPERCASE
console.log(gameName.charAt(2)); // Output: "t" (character at index 2)
console.log(gameName.indexOf('t')); // Output: 2 (index of the first occurrence of "t")

// Substring and Slice
const newString = gameName.substring(0, 4); // Output: "hite" (substring from index 0 to 3)
console.log(newString);

const anotherString = gameName.slice(-8, 4); // Output: "hitesh" (slice from index -8 to 3)
console.log(anotherString);

// Trimming
const newStringOne = "   hitesh    "; // Declare a string with leading and trailing spaces
console.log(newStringOne);
console.log(newStringOne.trim()); // Remove leading and trailing spaces

// String Replacement and Inclusion
const url = "https://hitesh.com/hitesh%20choudhary"; // Declare a URL string
console.log(url.replace('%20', '-')); // Replace "%20" with "-"
console.log(url.includes('sundar')); // Output: false (check if "sundar" is in the string)

// String Splitting
console.log(gameName.split('-')); // Output: ["hitesh", "hc", "com"]
