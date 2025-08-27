let images = document.querySelectorAll("img");

images.forEach((element) => {
    element.addEventListener("click", function () {
        document.getElementById("modal").style.display = "flex";
        document.getElementById("modal").querySelector("img").src = element.src;
    });

});
document.getElementById("modal").querySelector("button").addEventListener("click",function(){
    document.getElementById("modal").style.display = "none";
});
