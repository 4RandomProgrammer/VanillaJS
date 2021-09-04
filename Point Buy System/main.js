const plusBtns = document.querySelectorAll('.plus');
const minusBtns = document.querySelectorAll('.minus');
const values = document.querySelectorAll('.text');
const total = document.querySelector('h3');
const maxValue = 15;
const maxTotal = 27;
let valorAtual = 0;

//O primeiro indica o elemento que esta selecionado e o segundo o index dele.
plusBtns.forEach((element, index) =>{
    element.addEventListener('click', event => {
        if(parseInt(values[index].innerText) < 15 && valorAtual < maxTotal) {
            values[index].innerText = `${parseInt(values[index].innerText) + 1}`;

            if(parseInt(values[index].innerText) > 13) {
                total.innerText = `${parseInt(total.innerText) + 2} / 27`;
                valorAtual += 2;
            }
            else{
                total.innerText = `${parseInt(total.innerText) + 1} / 27`;
                valorAtual += 1;
            }

        }
    });
});

minusBtns.forEach((element, index) =>{
    element.addEventListener('click', event => {
        if(parseInt(values[index].innerText) > 8 && valorAtual > 0) {
            values[index].innerText = `${parseInt(values[index].innerText) - 1}`;

            if(parseInt(values[index].innerText) >= 13) {
                total.innerText = `${parseInt(total.innerText) - 2} / 27`;
                valorAtual -= 2;
            }
            else{
                total.innerText = `${parseInt(total.innerText) - 1} / 27`;
                valorAtual -= 1;
            }
            
        }
    });
});