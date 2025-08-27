let currentAudio = null;

let audios = document.querySelectorAll("audio");
let buttons = document.querySelectorAll("button");

let controls = document.getElementById("controls");

buttons.forEach((element, index) =>{
    element.addEventListener("click",function(){
        if(currentAudio){
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = audios[index];
        currentAudio.play();
    })
})

controls.addEventListener("click",function(){
    if (currentAudio) {
      currentAudio.pause();
    }
    controls.textContent = "RESUME";
    
    
});




// buttons[0].addEventListener("click", function () {
//     if (currentAudio) {
//         currentAudio.pause();
//         currentAudio.currentTime = 0;
//     }
//     currentAudio = audios[0];
//     currentAudio.play();

// })
// buttons[1].addEventListener("click", function () {
//     if (currentAudio) {
//         currentAudio.pause();
//         currentAudio.currentTime = 0;
//     }
//     currentAudio = audios[1];
//     currentAudio.play();

// })
// buttons[2].addEventListener("click", function () {
//     if (currentAudio) {
//         currentAudio.pause();
//         currentAudio.currentTime = 0;
//     }
//     currentAudio = audios[2];
//     currentAudio.play();

// })