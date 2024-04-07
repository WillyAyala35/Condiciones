const numero1 = document.querySelector('#selector-1').value;

const numero2 = document.querySelector('#selector-2').value;

const numero3 = document.querySelector('#selector-3').value;

const password1 = numero1+numero2+numero3

const password2 = numero1+numero2+numero3

const MensjeOculto = document.querySelector('#Mensje-Oculto'); 

const button = document.querySelector('button');

button.addEventListener('click', () => {
    
    if (password1 == 911) {document.querySelector('#Mensje-Oculto').innerHTML = 'Password 1 correcto';} 
    if (password2 == 714) {document.querySelector('#Mensje-Oculto').innerHTML = 'Password 2 correcto';}
    else {document.querySelector("#Mensje-Oculto").innerHTML =  "Password incorrecto"}
   
})