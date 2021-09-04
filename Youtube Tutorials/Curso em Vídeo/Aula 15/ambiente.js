let num = [1,2,3,"Luís"];

console.log(`O tamanho do vetor é ${num.length}`)
num.sort()
console.log(`Nosso vetor é ${num}`);

for (let index = 0; index < num.length; index++) {
    console.log(`Passo ${index}, elemento: ${num[index]}`)
    
}

for (const key in num) {
    console.log(num[key])
}

console.log(num.indexOf("Luís")) 