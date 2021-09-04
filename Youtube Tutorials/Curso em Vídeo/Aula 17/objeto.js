let amigo = {
    nome: "josé",
    sexo: "M",
    peso: 84.5,
    enngordar(){
        this.peso += 10;
        console.log(`Ele engordou! Agora ele pesa ${this.peso}`);
    }
}

console.log(amigo)

amigo.enngordar();