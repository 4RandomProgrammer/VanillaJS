function parimpar(n){
    if(n % 2 == 0){
        console.log(`O número ${n} é Par!`);
    }
    else {
        console.log(`O número ${n} é Impar!`);
    }
}

function soma(num1 = 0, num2 = 0) {
    console.log(`A soma entre ${num1} e ${num2} é igual: ${num1 + num2}`);
}

let v = function () {
    console.log("isso funciona?");
}




v()
parimpar(5);
soma(2)