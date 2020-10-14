'use strict'

/*Ejercicio 8: Pedir dos numeros por pantalla, evitar ingresos fallidos. Mostrar multiplicacion, division, suma y resta*/

var numeroUno = parseInt(prompt("Introduzca el primer numero", 0)); 
var numeroDos = parseInt(prompt("Introduzca el segundo numero", 0));

while(isNaN(numeroUno) || numeroUno < 0){
    numeroUno = parseInt(prompt("Introduzca el primer numero")); 
}

while(isNaN(numeroDos || numeroDos < 0)){
    numeroDos = parseInt(prompt("Introduzca el segundo numero"));
}

console.log("Suma: "+(numeroUno+numeroDos));
console.log("Resta: "+(numeroUno-numeroDos)); 
console.log("Multiplicación: "+(numeroUno*numeroDos)); 
console.log("División: "+(numeroUno/numeroDos));