let myDate = new Date(); // Create a Date object representing the current date and time

console.log(myDate.toString()); // Output: String representation of the date and time

console.log(myDate.toDateString()); // Output: String representation of the date (without time)

console.log(myDate.toLocaleString()); // Output: Localized date and time string

console.log(typeof myDate); // Output: "object" (data type of myDate)

// Creating Dates
let myCreatedDate = new Date(2023, 0, 23); // Create a specific date (year, month, day)
let myCreatedDate = new Date(2023, 0, 23, 5, 3); // Specify time as well (hour, minute)
let myCreatedDate = new Date("2023-01-14"); // Create a date using a string in ISO format
let myCreatedDate = new Date("01-14-2023"); // Create a date using a different date format
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // Get the current timestamp (milliseconds since Unix epoch)
console.log(myTimeStamp); // Output: Current timestamp
console.log(myCreatedDate.getTime()); // Output: Timestamp of the created date
console.log(Math.floor(Date.now() / 1000)); // Output: Current timestamp in seconds

let newDate = new Date(); // Create a new Date object for the current date and time
console.log(newDate); // Output: String representation of the date and time
console.log(newDate.getMonth() + 1); // Output: Current month (add 1 because months are 0-indexed)
console.log(newDate.getDay()); // Output: Current day of the week (0 = Sunday, 1 = Monday, ...)

// Formatting with `toLocaleString`
newDate.toLocaleString('default', {
    weekday: "long", // Get the full weekday name
});
