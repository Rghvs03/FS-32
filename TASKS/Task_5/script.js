const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream big and dare to fail. – Norman Vaughan",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Your limitation—it’s only your imagination."
];

let button = document.querySelector("button");
let lastIndex = -1;

button.addEventListener("click",function(){
    let randomIndex = Math.floor(Math.random()*quotes.length);

    while(randomIndex === lastIndex){
        randomIndex = Math.floor(Math.random()*quotes.length);
    };
    document.querySelector("h1").textContent = quotes[randomIndex];
    document.querySelector("h1").style.color = getRandomColor();
    lastIndex = randomIndex;

});

function getRandomColor(){
    let r = Math.floor(Math.random()*180);
    let g = Math.floor(Math.random()*180);
    let b = Math.floor(Math.random()*180);

    return `rgb(${r}, ${g}, ${b})`;

}

