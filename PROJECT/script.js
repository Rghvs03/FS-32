window.addEventListener("keydown", function (e) {

    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        document.querySelector(".pallete").classList.remove("hidden");
        document.querySelector("input").focus();
    }

    if (e.key === "Escape") {

        if (!document.querySelector(".pallete").classList.contains("hidden")) {

            document.querySelector(".pallete").classList.add("hidden");
            document.querySelector("input").value = "";

        }
    }


});

document.querySelector("form").addEventListener("submit", function (evt) {
    evt.preventDefault();

    if (document.querySelector("input").value.toLowerCase().split(" ")[0] === "google") {
        let searchTerm = document.querySelector("input").value.trim().toLowerCase().split(" ").slice(1).join(" ");
        const url = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);

        window.open(url, "_blank");

    }

    document.querySelector(".pallete").classList.add("hidden");
    document.querySelector("input").value = "";

});