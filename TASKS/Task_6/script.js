const users = [
    "Aarav", "Vihaan", "Ishita", "Kavya", "Rohan", "Meera", "Arjun", "Ananya", "Siddharth", "Priya",
];

let inp = document.querySelector("input");


inp.addEventListener("input", function () {

    document.getElementById("users").style.display = "flex";

    let newarr = users.filter(function (val) {
        return val.toLowerCase().includes(inp.value.toLowerCase());
    });

    print(newarr);

});

function print(arr) {

    document.getElementById("users").innerHTML = "";

    arr.forEach(function (val) {
        let p = document.createElement("p");
        p.style.fontSize = "large";
        p.textContent = val;

        document.getElementById("users").appendChild(p);
    });
};

