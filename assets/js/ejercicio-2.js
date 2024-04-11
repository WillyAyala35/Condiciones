const valor1 = document.querySelector('.input-1');

const valor2 = document.querySelector('.input-2');

const valor3 = document.querySelector('.input-3');

const button = document.querySelector('button');


button.addEventListener('click', () => {
    

    const valorTotal = +valor1.value + +valor2.value + +valor3.value
    console.log(valorTotal);
    
    if (valorTotal > 10) { 
        const parrafo1 = document.querySelector('#Mensje-Oculto'); 
        parrafo1.innerHTML = 'LLevas demasiados stickers';
    } 
    else {document.querySelector("#Mensje-Oculto").innerHTML =  "Llevas " + valorTotal + " Stickers"}
})
