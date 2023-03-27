// #ejercicio 1
let personas = ["sofia", "david", "juan"];

for (let i of personas) {
  console.log(i);
}
// #ejercicio 2
let names = ["Sofia", "David", "Juan"];
let nuevosNames = ["Sara", "Augustin"];
for (let i = 0; i < nuevosNames.length; i++) {
  names.push(nuevosNames[i]);
}
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// #ejercicio 3
let nombres = ["Sofia", "David", "Juan", "Sara", "Agustin"];
let nuevosNombres = ["Renata", "Elena"];
for (let i = 0; i < nuevosNombres.length; i++) {
  if (i === 0) {
    nombres.splice(1, 0, nuevosNombres[i]);
  } else {
    nombres.push(nuevosNombres[i]);
  }
}

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// #ejercicio arbol
for (let i = 1; i <= 5; i++) {
  let espacio = "";
  for (let bola = 1; bola <= i; bola++) {
    espacio += "* ";
  }
  console.log(espacio);
}

//   #while exercise
let x = 5;

while (x > 0) {
  console.log(x);
  x -= 0.5;
}
// 2
let num = 1;

while (num <= 100) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num++;
}
// 3
function addParentesis(numeros) {
  let num = 1;
  let resultado = "";

  while (num <= numeros) {
    resultado += "[" + num + "] ";
    num++;
  }

  console.log(resultado);
}

addParentesis(8);
// 4
function sumarNumeros(numerosASumar) {
  let suma = 0;
  let i = 1;

  while (i <= numerosASumar) {
    suma += i;
    i++;
  }

  return suma;
}
console.log(sumarNumeros(6));
