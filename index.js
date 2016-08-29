// append text label
var user_div = document.getElementById("user-box");
var p = document.createElement("p");
p.id = "main-label";
p.textContent = "who dat?";
user_div.appendChild(p);

document.getElementById("main-button").onclick = function () {
    document.getElementById("main-label").textContent = "Lauren Ferrara";
}




