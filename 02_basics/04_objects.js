// Creating a Tinder user object using an empty object literal
const tinderUser = {};

// Adding properties to the tinderUser object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// Defining a regularUser object with nested properties
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
};

// Accessing the firstname property within the nested structure
const userFirstName = regularUser.fullname.userfullname.firstname;

// Creating three objects with numeric keys
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// Merging objects using the spread operator
const obj3 = { ...obj1, ...obj2, ...obj4 };

// Defining an array of user objects
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "a@gmail.com" },
    { id: 3, email: "b@gmail.com" }
];

// Accessing the email property of the second user
const secondUserEmail = users[1].email;

// Creating a course object with properties
const course = {
    coursename: "JavaScript in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
};

// Destructuring the course object to extract the courseInstructor property
const { courseInstructor: instructor } = course;

// Logging the extracted instructor value
console.log(instructor);

// Nested array structure with objects
const modifiedData = [
    { name: "Hitesh", coursename: "JavaScript in Hindi", price: "free" },
    { name: "John", coursename: "React Fundamentals", price: "paid" },
    { name: "Emily", coursename: "Node.js Essentials", price: "free" }
];

// Logging the modified data structure
console.log(modifiedData);
