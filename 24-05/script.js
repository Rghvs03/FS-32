
let sum = 0;
for(let i = 1; i < 9; i++){
    let a = prompt("number dedo")
    
    if(a === null){
        console.log("till now : ",sum);
    }
    a = Number(a.trim());
    if(!isNaN(a)){
        sum+=a;
        console.log("till now : ",sum);
    }
    else{
        console.log("till now : ",sum);
    }
    
}

// OBJECTS IN JS


 