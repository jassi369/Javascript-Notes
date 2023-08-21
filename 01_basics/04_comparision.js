// Comparison Operators
console.log(2 > 1); // Output: true (2 is greater than 1)
console.log(2 >= 1); // Output: true (2 is greater than or equal to 1)
console.log(2 < 1); // Output: false (2 is not less than 1)
console.log(2 == 1); // Output: false (2 is not equal to 1)
console.log(2 != 1); // Output: true (2 is not equal to 1)

// Type Conversion in Comparison
console.log("2" > 1); // Output: true ("2" is converted to a number, which is greater than 1)
console.log("02" > 1); // Output: true ("02" is converted to a number, which is greater than 1)

// Comparing null and undefined
console.log(null > 0); // Output: false (null is converted to 0, which is not greater than 0)
console.log(null == 0); // Output: false (null is not equal to 0)
console.log(null >= 0); // Output: true (null is converted to 0, loose equality)

// Comparing undefined and 0
console.log(undefined == 0); // Output: false (undefined is not equal to 0)
console.log(undefined > 0); // Output: false (undefined is converted to NaN, not greater than 0)
console.log(undefined < 0); // Output: false (undefined is converted to NaN, not less than 0)

// Strict Equality Operator (===)
console.log("2" === 2); // Output: false (strict equality, different types)
