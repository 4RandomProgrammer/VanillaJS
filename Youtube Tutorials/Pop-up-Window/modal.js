//Selectors
var parent = document.querySelector(".modal-parent"),
    btn = document.querySelector("button"),
    X = document.querySelector(".X"),
    section = document.querySelector("section");

//Event listeners
btn.addEventListener("click", appear);
X.addEventListener("click", disappearX);
parent.addEventListener("click", disappearparent);

//Functions
function appear(){
    parent.style.display = "block";
    section.style.filter = "blur(6px)";
}

function disappearX(){
    parent.style.display = "none";
    section.style.filter = "blur(0px)";
}

function disappearparent(e){
    if(e.target.className == "modal-parent"){
        parent.style.display = "none";
        section.style.filter = "blur(0px)";
    }
}