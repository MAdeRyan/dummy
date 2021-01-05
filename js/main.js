function myFunction(img) {
    var id = document.getElementById("jumlah");
    if(id.style.display == "block")
        id.style.display = "none";
    else if(id.style.display == "none")
        id.style.display = "block";
}

function plus() {
    var id = document.getElementById("count");
    id.innerText++;
}
function minus() {
    var id = document.getElementById("count");
    id.innerText--;
}