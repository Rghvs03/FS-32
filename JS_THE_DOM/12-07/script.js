
// 1. Create array and add 3 zeroes
// 2. Use .forEach
// 3. Create a card using HTML / CSS / Tailwind
//    - name
//    - friendship status
//    - description
//    - button
// 4. Give card code to GPT, get document.createElement code
// 5. Paste complete code inside forEach and append it properly

// let arr = [0, 0, 0, 0];

// arr.forEach(function (val) {

//     const card = document.createElement("div");
//     card.className = "card flex bg-[url(https://plus.unsplash.com/premium_photo-1670841126821-e0cfafc22139?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8)] bg-cover w-100 text-white flex-col items-start p-10 gap-5 rounded-2xl";

//     // Title
//     const title = document.createElement("h1");
//     title.className = "text-4xl font-semibold text-[#cecdc9]";
//     title.textContent = "Shin-chan";
//     card.appendChild(title);

//     // Subtitle
//     const subtitle = document.createElement("h3");
//     subtitle.className = "text-2xl text-red-500 font-semibold";
//     subtitle.textContent = "Stranger";
//     card.appendChild(subtitle);

//     // Paragraph
//     const para = document.createElement("p");
//     para.className = "text-xl";
//     para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo, blanditiis dolor excepturi impedit perferendis vero!";
//     card.appendChild(para);

//     // Button
//     const button = document.createElement("button");
//     button.className = "flex justify-center bg-[#8eafd0] border-2 py-2 px-5 rounded-full active:scale-90 text-xl";
//     button.textContent = "Add Friend";
//     card.appendChild(button);

//     // Append to body or any container
//     document.body.appendChild(card);
// })

// var totalL = 0;
// var totalF = 0;
// var mypost = [
//     {
//         name:'sunrise',
//         likes:300,
//         comment:12,
//         share:12,
//         followersGained:25
//     }
//     ,
//     {
//         name:'evening',
//         likes:200,
//         comment:12,
//         share:5,
//         followersGained:-5
//     }
//     ,
//     {
//         name:'sunset',
//         likes:100,
//         comment:12,
//         share:12,
//         followersGained:15
//     }
//     ,
//     {
//         name:'manali',
//         likes:500,
//         comment:12,
//         share:12,
//         followersGained:10
//     }
//     ,
//     {
//         name:'mandav',
//         likes:400,
//         comment:12,
//         share:12,
//         followersGained:20
//     }
// ]

// mypost.forEach(function(val){
//     console.log(val);


//     totalF = totalF + val.followersGained;
//     totalL = totalL + val.likes;

//     totalF += val.followersGained;
// totalL += val.likes;
    
// })
// console.log(totalF);
//     console.log(totalL);

let flag = 0;
let btn = document.querySelector("button")
let full = document.querySelector('.full-nav')
btn.addEventListener('click',function(){
    if(flag = 0){
        full.style.right = 0
        btn.innerHTML = `<i class="ri-close-line"></i>`
        flag = 1;
      }
      else{
        full.style.right = '-40%'
        btn.innerHTML = `<i class="ri-menu-line"></i>`
        flag = 0;
      }
})
