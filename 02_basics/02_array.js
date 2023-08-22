// Introduction to Array Operations
// In this code, we explore various operations and techniques involving arrays.

// Marvel and DC Heroes Arrays
const marvelHeroes = ["thor", "Ironman", "spiderman"]; // Array of Marvel heroes
const dcHeroes = ["superman", "flash", "batman"]; // Array of DC heroes

marvelHeroes.push(dcHeroes); // Pushing the 'dcHeroes' array into the 'marvelHeroes' array
console.log("Merged Marvel Heroes Array:", marvelHeroes);
// Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

console.log("Accessing Nested Element:", marvelHeroes[3][1]);
// Output: "flash" (accessing element in the nested array)

// Concatenation using 'concat'
const allHeroesConcatenated = marvelHeroes.concat(dcHeroes);
console.log("Concatenated Heroes Array:", allHeroesConcatenated);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Using the Spread Operator for Merging
const allHeroesSpread = [...marvelHeroes, ...dcHeroes];
console.log("Merged Heroes Array using Spread Operator:", allHeroesSpread);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Nested Arrays and Flattening
const nestedArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flattenedArray = nestedArray.flat(Infinity);
console.log("Flattened Array:", flattenedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking Array Nature
console.log("Is 'Hitesh' an Array?", Array.isArray("Hitesh"));
// Output: false (checks if "Hitesh" is an array)

// Creating Arrays from Different Sources
console.log("Array from String:", Array.from("Hitesh"));
// Output: ["H", "i", "t", "e", "s", "h"] (converts string to array)

console.log("Array from Object:", Array.from({ name: "hitesh" }));
// Output: [] (empty array from an object)

// Creating an Array of Values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log("Array of Scores:", Array.of(score1, score2, score3));
// Output: [100, 200, 300] (creates an array from values)

// This code showcases different array operations including merging, concatenation,
// spreading, flattening, and array creation from different sources.