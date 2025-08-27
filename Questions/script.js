// ✅ Q1.

// Prompt the user for a number. Keep doubling it until it becomes greater than 100.
// Print how many times it was doubled and the final value.

// let a = prompt("Enter a number");
// let count = 0;
// if(a !== null && a.trim()!=="" && !isNaN(Number(a))){
//     a = Number(a);
//     while (a <= 100) {
//         a = a * 2;
//         count++;
//      }
// console.log(a);
// console.log(count);
// }
// else{
// console.log("Not a Number! Enter a Valid Number:");
// }

// ✅ Q2.

// Take two inputs: start and target.
// Keep adding 7 to start until it becomes equal to or greater than target.
// Count how many times the addition happened.

// let S = prompt("Enter Start:");
// let T = prompt("Enter Target:");
// let count = 0;
// if (S !== null && T !== null && S.trim() !== "" && T.trim() !== "" && !isNaN(Number(S)) && !isNaN(Number(T))) {
//     S = Number(S);
//     T = Number(T);

//     while (S <= T) {
//         S += 7;
//         count++;
//     }
//     console.log(S);
//     console.log(count);
// }
// else{
//     console.log("Not valid input");

// }

// ✅ Q3.

// Take a number as input.
// Print all the numbers in reverse order from that number to 1, but skip numbers divisible by 5.

// let input = prompt("Enter a number");

// if (input !== null && input.trim() !== "" && !isNaN(Number(input))) {
//     input = Number(input);
//     for (let i = input; i >= 1; i--) {
//         if (i % 5 !== 0) {
//             console.log(i);
//         }

//     }
// }

// else {
//     console.log("Not a valid Number");

// }


// ✅ Q4.

// Prompt for a number.
// Print the sum of all even numbers between 1 and that number (inclusive).
// Use a loop.

// let number = prompt("Enter a number");
// let sum = 0;

// if (number !== null && number.trim() !== "" && !isNaN(Number(number))) {
//     number = Number(number);

//     for (let i = 1; i <= number; i++) {

//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }
// else {
//     console.log("Not a valid Number");
// }


// ✅ Q5.

// Take a number as input.
// Check how many digits are in that number (don’t convert to string).
// For example, 1256 → 4 digits

// let num = prompt("Enter a number");
// let count = 0;
// if (num !== null && num.trim() !== "" && !isNaN(Number(num))) {
//     num = Number(num);

//     while (num > 0) {
//         num = Math.floor(num / 10);
//         count++;
//     }
//     console.log(count);
// }
// else {
//     console.log("Not a valid Number");
// }

// ✅ Q6.

// Take a number.
// Keep dividing it by 2 until it becomes less than 1.
// Count how many times the division was done.

// let numb = prompt("Enter a number");
// let counT = 0;
// if (numb !== null && numb.trim() !== "" && !isNaN(Number(numb))) {
//     numb = Number(numb);

//     while(numb > 1){
//         numb/=2;
//         counT++;
//     }
//     console.log(counT);

// }
// else {
//     console.log("Not a valid Number");
// }

// ✅ Q7.

// Take two inputs: base and target.
// Multiply the base with itself repeatedly (base^1, base^2, …) until the result crosses target.
// Count how many multiplications it took.

// let b = prompt("Enter Base:");
// let t = prompt("Enter Target:");
// let countt = 0;
// if (b !== null && t !== null && b.trim() !== "" && t.trim() !== "" && !isNaN(Number(b)) && !isNaN(Number(t))) {
//     b = Number(b);
//     t = Number(t);
//     let result = 1;
//     while (result <= t) {
//         result *= b;
//         countt++;
//     }
//     console.log(countt);
// }
// else {
//     console.log("Not valid input");
// }

// ✅ Q8.

// Take a number.
// Print the factorial of the number using a loop (e.g., 5 → 5×4×3×2×1 = 120)

// let numm = prompt("Enter a number");
// if (numm !== null && numm.trim() !== "" && !isNaN(Number(numm))) {
//     numm = Number(numm);
//     let factorial = 1;

//     for (let i = numm; i >= 1; i--) {
//         factorial *= i;
//     }
//     console.log(factorial);
// }
// else {
//     console.log("Not a valid Number");
// }

// ✅ Q9.

// Prompt for a number.
// Print how many odd numbers exist between 1 and that number.

// let nuum = prompt("Enter a number");
// if (nuum !== null && nuum.trim() !== "" && !isNaN(Number(nuum))) {
//     nuum = Number(nuum);
//     let counttT = 0;

//     for (let i = 1; i <= nuum; i++) {
//         if (i % 2 !== 0) {
//             counttT++;
//         }
//     }
//     console.log(counttT);
// }
// else {
//     console.log("Not a valid Number");
// }




// ✅ Q10.

// Take a number.
// Keep subtracting 9 from it until the number becomes less than 0.
// Print the last value before it became negative, and how many subtractions happened.

// let nmbr = prompt("Enter a number");
// if (nmbr !== null && nmbr.trim() !== "" && !isNaN(Number(nmbr))) {
//     nmbr = Number(nmbr);

//     let subsCount = 0;
//     let lastValue;
//     while(nmbr>= 0){
//         lastValue = nmbr;
//         nmbr-=9;
//         subsCount++;

//     }
//     console.log(lastValue);
//     console.log(subsCount);


// }
// else {
//     console.log("Not a valid Number");
// }

let nmbr = prompt("Enter a number");

if (nmbr !== null && nmbr.trim() !== "" && !isNaN(Number(nmbr))) {
    nmbr = Number(nmbr);

    let subsCount = 0;
    let lastValue;

    while (nmbr >= 0) {
        lastValue = nmbr;
        nmbr -= 9;
        subsCount++;
    }

    console.log("Last value before going negative:", lastValue); // ✅ 8 (for 200)
    console.log("Total subtractions:", subsCount);               // ✅ 23
} else {
    console.log("Not a valid Number");
}



