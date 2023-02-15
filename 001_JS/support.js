
function demo() {
    alert("Demo calling")
}

function val() {
    document.getElementsByTagName("input")[0].style.backgroundColor = "red"
    document.getElementsByTagName("input")[1].style.backgroundColor = "green"

}

function btn() {

    var btn = document.getElementById("btn");
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
}

function add() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var result = document.getElementById("result")

    var r = Number(a) + Number(b);
    result.innerHTML = r;
}

function div() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var result = document.getElementById("result")

    var r = Number(a) / Number(b);
    result.innerHTML = r;
}
function sub() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var result = document.getElementById("result")

    var r = Number(a) - Number(b);
    result.innerHTML = r;
}
function mul() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var result = document.getElementById("result")

    var r = Number(a) * Number(b);
    result.innerHTML = r;
}





// setTimeout(() => {

//     const mydate = new Date();
//     document.getElementById("dt").innerHTML = mydate
// }, 5000)

setInterval(() => {
    const mydate = new Date();
    document.getElementById("dt").innerHTML = mydate
}, 1000);