// 1.Check if Input is a String
// Ask the user for input using prompt().If the input is a string (not empty),print “You entered a string”. Otherwise, print “Invalid input”.

var a = prompt("Enter a string");

if (a === null || a.trim() === "") {
    console.log("Invalid input");
}
else {
    console.log("You entered a string");
}

// 2. Check if Input is a number 
// Ask the user for input and convert it into a number.If it’s a valid number (not NaN), print “Your number is: X”.Otherwise, print “Please enter a valid number”.
var b = prompt("Enter a valid number: ");

if (b !== null && b.trim() !== "" && !isNaN(Number(b))) {
    b = Number(b);
    console.log("Your Number is:", b);
}
else {
    console.log("Please enter a valid number");
}

//3. Check if Number is Even or Odd
//  Ask the user to enter a number. If the number is even, print “Even number”. If it’s odd, print “Odd number”. If it’s not a number, print “Not a valid number”.

var c = prompt("Enter a valid number");

if (c !== null && c.trim() !== "" && !isNaN(Number(c))) {
    c = Number(c);
    if (c % 2 === 0) {
        console.log("Even Number");
    }
    else {
        console.log("Odd Number");
    }
}
else {
    console.log("Not a valid Number");

}

// 4.Check if Input is Empty
// Prompt the user to enter something. If they enter an empty string, print “You didn’t enter anything!”. Otherwise, print “Thank you for your input”.

var d = prompt("Enter something:");

if (d !== null && d.trim() !== "") {
    console.log("Thank you for your input");
}
else {
    console.log("You didn’t enter anything!");
}

// 5.Detect Boolean-like String
// Prompt the user for input. If they type “true” or “false”, print “You entered a boolean string”. Otherwise, print “Not a boolean string”.

// Solution 1 -- 

var e = prompt("Enter your input");

if (e === "true" || e === "false") {
    console.log("You entered a boolean string")
}
else {
    console.log("Not a boolean string");

}

// Solution 2 -- 

var e = (prompt("Enter your input") || "").trim().toLowerCase();

if (e === "true" || e === "false") {
    console.log("You entered a boolean string")
}
else {
    console.log("Not a boolean string");
}

// 6.Age Checker
// Ask the user to enter their age. If the age is below 18, print “You are underage”. If it’s 18 or more, print “You are an adult”. If the input is invalid, print “Please enter a valid age”.

var age = prompt("Enter valid age:");

age = Number(age);

if (!isNaN(age) && age > 0) {
    if (age < 18) {
        console.log("You are underage");
    }
    else {
        console.log("You are an adult");
    }
}
else {
    console.log("Please enter a valid age");

}

// 7.Number Range Checker
// Ask the user to input a number. If the number is between 10 and 100, print “Number is in range”. If not, print “Out of range”. If invalid, print “Please enter a number”.

var num = prompt("Input a number");

num = Number(num);

if (!isNaN(num)) {
    if (num >= 10 && num <= 100) {
        console.log("Number is in range");

    }
    else {
        console.log("Out of range");

    }
}
else {
    console.log("Please enter a number")
}


// 8.Simple Password Match
// Prompt the user to enter a password. If it matches a predefined password (like “sheryians123”), print “Access granted”. Otherwise, print “Wrong password”.

var predefinedPassword = "sheryians123";

var password = prompt("Enter your Password");

if (password === predefinedPassword) {
    console.log("Access granted");
}
else {
    console.log("Wrong password");

}

// 9.Length of Input
// Ask the user to enter a word. If the word has more than 5 characters, print “Long word”. If it’s 5 or fewer characters, print “Short word”. If nothing entered, print “Empty input”.



var word = prompt("Enter a word");
if (word != null && word.trim() != "") {
    if (word.length > 5) {
        console.log("Long word");
    }
    else {
        console.log("Short word");
    }

}
else {
    console.log("Empty input");
}

// 10.Multiple Condition Checker
// Prompt the user to enter their name. If the name is “Harsh” or “harsh”, print “Welcome back, Harsh!”. If the input is empty, print “No name entered!”. Otherwise, print “Hello, [input]”

var userName = prompt("Enter your name");

if (userName === "Harsh" || userName === "harsh") {
    console.log("Welcome back, Harsh!");

}
else if (userName === null || userName.trim() === "") {
    console.log("No name entered!");
}
else {
    console.log(`Hello ${userName}`);

}















