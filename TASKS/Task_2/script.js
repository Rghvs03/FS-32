let flag = true;

let btn = document.querySelector("button");

btn.addEventListener("click",function(){

    if(flag){
        document.querySelector("h1").style.color = "red";
        document.querySelector("h1").textContent = "RED !!!";
        flag = false;
    } 
    else{
        document.querySelector("h1").style.color = "black";
        document.querySelector("h1").textContent = "BLACK !!!";
        flag = true;
    }
    

});