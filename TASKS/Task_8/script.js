window.addEventListener("scroll",function(){
    const scrolled = window.scrollY;

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrolled/scrollableHeight) * 100);
    // document.getElementById("progress").style.width = `${scrollPercent}%`;
    document.getElementById("progress").style.height = `${scrollPercent}%`;
    // document.getElementById("progressBar").h1.innerText = `${scrollPercent}%`;
    
    document.querySelector("#progressBar h1").innerText = `${scrollPercent}%`;
});