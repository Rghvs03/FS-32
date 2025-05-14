
console.log('Hello');
// 1.Print your name in the console.

console.log("Q.1")
console.log("Raghav Sharma");

// 2.	Add two numbers.

console.log("Q.2")
var a = 10;
var b = 20;
var sum = a + b;
console.log("Addition of a and b is " + sum);

// 3.	Check if a number is even or odd.

console.log("Q.3")
function CheckEvenOdd(number) {
    if (number % 2 == 0) {
        console.log("Even");

    }
    else {
        console.log("Odd");

    }
}
CheckEvenOdd(2);
CheckEvenOdd(3);

// 4.	Find the largest of two numbers.

console.log("Q.4")
function maxNumber(a, b) {
    if (a > b) {
        console.log(a + " is largest");

    }
    else {
        console.log(b + " is largest");

    }
}
maxNumber(20, 34);

// 5.	Swap two variables using a temporary variable.

console.log("Q.5")
function Swap(a, b) {

    temp = a;
    a = b;
    b = temp;

    console.log(a, b);

}
Swap(6, 9);


// 6.	Print numbers from 1 to 10 using a loop.

console.log("Q.6")
function number1to10() {

    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}
number1to10();

// 7.	Reverse a string.

console.log("Q.7")
var str = "Hello World";
console.log("Original String: ", str);
var reversed = "";

for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log("Reversed String: ", reversed);

// 8.	Count the number of characters in a string.

console.log("Q.8")
var string = "Hello";
console.log(string.length);
// 9.	Check if a string contains a particular word.

console.log("Q.9")
var str = prompt("Enter a String");
var n = prompt("Enter a word to find");

if(str.includes(n)){
    console.log("Yes " + n + " is present");
}
else{
    console.log("No " + n + " is not present");
}

// var ans = "No " + n + " is not present";
// for (var i = 0; i <= str.length - 1; i++) {
//     if (str[i] === n) {
//         ans = "Yes " + n + " is present";
//     }
// }
// console.log(ans);

// 10.	Create an array and print each item using forEach.

console.log("Q.10")
var arr = [1,2,3,4,5];

arr.forEach( (element,i) => {
    console.log(i,element)
});












