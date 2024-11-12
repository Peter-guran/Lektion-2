let text = document.querySelector("#todo");
let add = document.querySelector("#add");
let output = document.querySelector("#output");



add.addEventListener("click", function () {
    let todo = document.createElement("todo");
    output.innerText = text.value;

    output.innerText = " " + text.value;

    document.getElementById("output").style.color = "blue";

})