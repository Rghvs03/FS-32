// let arr = ["vaibhav", 2 ,"Raghav",3];

// arr.forEach(function(val){
// if(typeof val === "string"){
//     console.log(val);
// }
// });

// let arr = [];
// let arry = ["raghav",2,"krishna","vaibhav"];

// arry.forEach(function(val){
//     if(typeof val === "string"){
//         arr.push(val);
//     }
// })

// console.log(arr);
// console.log(arry);

// let blank = arry.map(function(val){

// })

// map tab use hota hai jab aapke main array ke baraabar ka naya array bane.
// filter tab use hota hai jab aapke main array ke baraabar ban bhi sakta hai aur nhi bhi.

// let blank1 = arr.filter(function(val){
//     return val > 3;
// })

// let arr = ["raghav",1,"vaibhav",2];

// let arr2 = arr.filter(function(val){
//     // if(typeof val === "string"){
//     //     return true;
//     return typeof val === "string";

//     // }
// })
// console.log(arr2)

// let arr = [100,200,1200,2000,400,5000];

// let arr3 = arr.filter(function(val){
//     // if(val > 1000){
//     //     return true;
//     // }
//     return val > 1000;
// })
// console.log(arr2);

let arr = [100,2000,400,5000,3500];

let arr3 = arr.filter(function(val){
    if(val>1000){
        // return true;
        return val;
    }
    // return val>1000;
})
console.log(arr3);

// let arr = ["Harsh","Raghav","Krishna"];

// let arr1 = arr.map(function(val){
//     return val + "Ji";
// })
// console.log(arr1);

// let arr = ["Harsh","Raghav","Krishna"];

// let arr1 = arr.map(function(val){
//     return val + "Ji";
// })
// console.log(arr1);

// let arr = ["raghav","ishu","ram"];

// let arr1 = arr.filter(function(val){
//     return val.length > 4;
// })
// console.log(arr1);

// let arr = [1,2,10,50];

// let newar = arr.map(function(val){
//     return val*83;
// })
// let newarr1 = newar.filter(function(val){
//     return val < 1000;
// })
// console.log(newarr1);



// let f = arr.map(val => val * 83).filter(val => val<1000);
// console.log(f);

// const cart = [
//     {name:'shirt',price:499},
//     {name:'Jeans',price:999},
//     {name:'Cap',price:199},

// ];

// let f = cart.filter(function(val){
//     return val.price > 500;
// })
// console.log(f);















