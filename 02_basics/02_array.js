const marvel_heros = ["thor", "Ironman", "spiderman"]; 
const dc_heros = ["superman", "flash", "batman"]; 

marvel_heros.push(dc_heros); // Push the 'dc_heros' array into 'marvel_heros'
console.log(marvel_heros); // Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvel_heros[3][1]); // Output: "flash" (accessing element in nested array)

const allHeros = marvel_heros.concat(dc_heros); // Concatenate 'marvel_heros' and 'dc_heros'
console.log(allHeros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros]; // Spread operator to merge arrays
console.log(all_new_heros); // Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; 

const real_another_array = another_array.flat(Infinity); // Flatten 'another_array'
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh")); // Output: false (checks if "Hitesh" is an array)
console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"] (converts string to array)
console.log(Array.from({ name: "hitesh" })); // Output: [] (empty array from an object)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300] (creates an array from values)
