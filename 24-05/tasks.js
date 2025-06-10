// 1.	Prompt the user 5 times and store each input in an array. At the end, print the entire array.

let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(prompt("Give Input"));
}
console.log(arr);

// 2.	Prompt the user 7 times. Count and print how many inputs were valid numbers.

let count = 0;
for (let i = 1; i <= 7; i++) {
    let a = prompt("Give Input");
    if (a !== null && a.trim() !== "") {
        a = Number(a);
        if (!isNaN(a)) {
            count++
        }
    }

}
console.log("Number of Inputs with valid Numbers: ", count);

// 3.	Prompt the user 6 times. Add and print the total only if the number is even. Ignore spaces, blanks, and cancelled inputs.

let add = 0
for (let i = 1; i <= 6; i++) {
    let a = prompt("Give Input");
    if (a !== null && a.trim() !== "") {
        a = Number(a);
        if (!isNaN(a) && a % 2 === 0) {
            add += a;
        }
    }
}
console.log("Total: ", add);

// 4.	Take 5 prompts, store them in an array, and print the array in reverse order.

let array = [];
for (let i = 1; i <= 5; i++) {
    array.push(prompt("Give Input"));
}
console.log("Reversed array: ", [...array].reverse());

// 5.	Prompt the user 4 times for any word. Print the word that has the highest number of characters.

let longest_word = "";

for (let i = 1; i <= 4; i++) {
    let a = prompt("Enter a word");
    if (a !== null && a.trim() !== "") {
        if (a.length > longest_word.length) {
            longest_word = a;
        }
    }
}
if (longest_word === "") {
    console.log("all inputs are empty");
}
else {
    console.log("longest word:", longest_word);

}

// 6.	Prompt the user 6 times for anything. Store all valid numbers in a new array and print just that array.

let valid_numbers = [];
for (let i = 1; i <= 6; i++) {
    let a = prompt("Enter Anything");
    if (a !== null && a.trim() !== "") {
        a = Number(a);
        if (!isNaN(a)) {
            valid_numbers.push(a);
        }
    }
}
console.log(valid_numbers);

// 7.	Prompt the user 5 times for numbers. Ignore blank or cancelled inputs. Print the total and the average of valid numbers.

let total = 0;
// let average = 0;
let validNumbers = 0;
for (let i = 1; i <= 5; i++) {
    let a = prompt("Give Input");

    if (a !== null && a.trim() !== "") {
        a = Number(a);
        if (!isNaN(a)) {
            total += a;
            validNumbers++;
            //    average=total/count;
        }

    }
}
console.log("Total: ", total);
validNumbers > 0 ? console.log("Average: ", total / validNumbers) : console.log("no valid inputs");

// 8.	Prompt 6 numbers and print the smallest and largest numbers entered.


let largest;
let smallest;
let isFirstvalidNumber = true;
for (let i = 1; i <= 6; i++) {
    let a = prompt("Enter Number");

    if (a !== null && a.trim() !== "") {
        a = Number(a);
        if (!isNaN(a)) {
            if (isFirstvalidNumber) {
                largest = a;
                smallest = a;
                isFirstvalidNumber = false;
            }
            else {
                if (a > largest) {
                    largest = a;
                }
                if (a < smallest) {
                    smallest = a;
                }
            }
        }
    }
}
console.log("Largest: ", largest);
console.log("Smallest: ", smallest);

// 9.	Take 4 prompts. If any input is exactly “admin” or “password”, show an alert saying “You entered a reserved word!”. Otherwise, log all inputs.

let allInputs = [];
let reserved_word = false;

for (let i = 1; i <= 4; i++) {
    let a = prompt("Give Input");
    if (a !== null && a.trim() !== "") {
        if (a === "admin" || a === "password") {
            alert("“You entered a reserved word!”");
            reserved_word = true;
        }
        else {
            allInputs.push(a);
        }
    }
}
if (!reserved_word) {
    console.log(allInputs);

}
else {
    console.log("reserved word is entered");

}

// 10.	Prompt the user to enter one number. Print the first 10 multiples of that number.

let a = prompt("Enter a number");
if (a !== null && a.trim() !== "") {
    a = Number(a);
    if (!isNaN(a)) {
        console.log("First 10 multiples of " + a + " are");
        for (let i = 1; i <= 10; i++) {
            console.log(a * i);
        }
    }
    else {
        console.log("Not a  Valid Number");
    }
}
else {
    console.log("nothing is entered");
}








