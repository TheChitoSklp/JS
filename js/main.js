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
