// Immediately Invoked Function Expressions (IIFE)
// Wraps code, creates private space, prevents global pollution, useful before modern modules.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//Using arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

