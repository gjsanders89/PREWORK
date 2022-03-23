// button1.onclick = function () { myScript };
// button2.onclick = function () { myScript };
// button3.onclick = function () { myScript };
// button4.onclick = function () { myScript };

button1.addEventListener("click", grow);
button2.addEventListener("click", blue);
button3.addEventListener("click", fade);
button4.addEventListener("click", done);

function grow() {
    console.log("should grow")
    var element = document.getElementById("box").classList.add("grown");
}

function blue() {
    console.log("should be blue now")
    var element = document.getElementById("box").classList.add("blued");
}

function fade() {
    console.log("should be faded")
    var element = document.getElementById("box").classList.add("faded");
}

function done() {
    console.log("aaand back to normal")
    var element = document.getElementById("box").classList.remove("faded", "blued", "grown");
}
