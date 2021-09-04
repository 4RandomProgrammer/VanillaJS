const btnD4 = document.getElementById("rollD4");
const valueD4 = document.getElementById("d4");
const btnD6 = document.getElementById("rollD6");
const valueD6 = document.getElementById("d6");


btnD4.addEventListener("click", rollD4);
btnD6.addEventListener("click", rollD6);

function rollD4(e) {

    e.preventDefault();

    var value = Math.floor((Math.random() * 4) + 1);

    valueD4.innerText = value;
}

function rollD6(e) {
    
    e.preventDefault();

    var value = Math.floor((Math.random() * 6) + 1);

    valueD6.innerText = value;
}
