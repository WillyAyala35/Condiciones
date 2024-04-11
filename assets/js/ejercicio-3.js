let numero1 = document.querySelector("#selector-1");

let numero2 = document.querySelector("#selector-2");

let numero3 = document.querySelector("#selector-3");

let MensjeOculto = document.querySelector("#Mensje-Oculto");

let button = document.querySelector("button");


button.addEventListener("click", () => {
  let unoValue = numero1.value;
  let dosValue = numero2.value;
  let tresValue = numero3.value;
  let SumaTotal = unoValue + dosValue + tresValue;
  console.log("SumaTotal");

  if (SumaTotal == 911) {document.querySelector("#Mensje-Oculto").innerHTML = "password 1 correcto";}
  else if (SumaTotal == 714) {document.querySelector("#Mensje-Oculto").innerHTML = "password 2 correcto";}
  else {document.querySelector("#Mensje-Oculto").innerHTML = "password incorrecto";}
});
