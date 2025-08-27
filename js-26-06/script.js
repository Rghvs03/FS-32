// (function (){
//  let balance = 1200;
//  return{
//     getter:function(){
//         console.log(balance);
//     }
//  };


// }) ();

// Questions ---

//  Variables & Declarations
// 1.	Create 3 variables using var, let, and const and log their values.

var a = 12;
let b = 24;
const c = 36;

console.log(a);
console.log(b);
console.log(c);


// 2.	Demonstrate hoisting behavior with var vs let.

// Data Types + Type System
// 3.	Write a function that checks if a value is primitive.

function primitiveChecker(val) {
    if ((val !== null && typeof val === "object") || typeof val === "function") {
        console.log("reference");
    }
    else {
        console.log("Primitive");
    }
}
primitiveChecker(null);


// 4.	Predict output: console.log(typeof null, typeof undefined)

//  AnS-- type of null is object and of undefined is undefined.

// 5.	Write a function that takes any value and returns "Truthy" or "Falsy".

function func(val) {
    if (!!val === true) {
        console.log("truthy");
    }
    else {
        console.log("falsy");
    }
}
func(0);

// Operators

// 6.	Create a program that returns a grade based on score using the ternary operator.

function grader(val) {


    return val < 0 || val > 100
        ? "Invalid Score"
        : val >= 90
            ? "A"
            : val >= 70
                ? "B"
                : val >= 60
                    ? "C"
                    : val >= 50
                        ? "D"
                        : "Bhadwe logzzz";


}
console.log(grader(100));


// 7.	Convert a number to a boolean using !!value and explain the result.








