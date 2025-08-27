window.addEventListener("scroll",function(){
    const scrolled = window.scrollY;

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled/scrollableHeight) * 100;
    document.getElementById("progress").style.width = `${scrollPercent}%`;
});