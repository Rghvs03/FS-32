// let a = document.querySelector("input");
// let b = document.querySelector("h1");
// b.style.color = "red"

// box.addEventListener("click",function(){
//     box.style.backgroundColor = "green";
// })

// box.addEventListener("dblclick",function(){
//     box.style.backgroundColor = "red";
// })

// window.addEventListener("mousemove",function(dets){
//         a.style.top = dets.clientY + "px"
//         a.style.left = dets.clientX + "px"
// })
// a.addEventListener("input",function(){
//     // console.log(a.value);
//     console.log(b.textContent = a.value);

// })

// let lis = document.querySelectorAll("li");

// lis.forEach(function(li){
//     li.addEventListener("click",function(){
//         li.style.textDecoration = "line-through";

//     });
// });

// let lis = document.querySelectorAll("li");

// lis.forEach(function(li){
//     li.addEventListener("click",function(){
//         li.style.display = "none";
//     });
// });

// let h1 = document.querySelectorAll("h1");
// h1.forEach(function(h1){
// h1.addEventListener("click",function(){
//     h1.style.color = "red";
//     h1.style.fontStyle = "italic"
// })
// })

// let imgs = document.querySelectorAll("img");

// imgs.forEach(function(img){
//     img.addEventListener("click",function(){
//         img.setAttribute("src","https://images.unsplash.com/photo-1751767882144-eec523c840e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D")
//     })
// })

// let ul = document.querySelector("ul");

// ul.addEventListener("click",function (dets){

//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);

//     if(dets.target.localName === "h1"){
//         dets.target.style.color =`rgba(${r},${g},${b})`;

//     }

// dets.target.style.color =`rgba(${r},${g},${b})`;
// console.dir(dets.target);
//   dets.target.style.color = "red";

// });

// let card = document.querySelector(".card");
// let h3 = document.querySelector("h3")
// let count = 0;

// card.addEventListener("click",function(dets){
//     // console.log("Hello");

//     if(dets.target.tagName === "BUTTON"){

//        count++;

//         h3.textContent = "Total Upvotes: ",count;

//     }

// })

let btn = document.querySelector("button");
let h3 = document.querySelector("h3")


btn.addEventListener("click", function () {
    console.log("clicked");
    h3.innerHTML = "Sending...";
    h3.style.color = "yellow";
    setTimeout(function () {
        h3.innerHTML = "Friends";
        h3.style.color = "#dce2f4";
    }, 2000);
})









