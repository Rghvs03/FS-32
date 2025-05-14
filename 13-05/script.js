console.log("Hello");

var a = false;

if(typeof a === 'string' ){
        console.log("String");
}
else if(typeof a === 'number'){
    console.log("number");
}
else{
    console.log("BC")
}

// var a = prompt("Enter a number");
// console.log(parseInt(a)+2);

// var a = prompt("Enter a number");
// console.log(Number(a)+2);


// var a = prompt("Number do");
// a = Number(a);

var a = prompt("Enter a number");
var b = Number(a);

if(typeof a !== 'number'){
    console.error();
}
