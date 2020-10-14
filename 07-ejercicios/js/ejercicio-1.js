'use strict'

/*Ejercicio 1: Programa que pida dos numeros y diga cual es el mayor, menor o si son iguales
Si los numeros no son numeros o son menores o iguales a cero, vuelva a pedir los numeros*/

var numeroUno = parseInt(prompt("Introduce el primer numero",0));
var numeroDos = parseInt(prompt("Introduce el segundo numero", 0));

console.log(numeroUno, numeroDos);

while(numeroUno <= 0 || isNaN(numeroUno)){
    numeroUno = parseInt(prompt("Introduce el primer numero",0));
}

while(numeroDos <= 0 || isNaN(numeroDos)){
    numeroDos = parseInt(prompt("Introduce el segundo numero", 0));
}

if(numeroUno == numeroDos){
    alert("Ambos numero son iguales");
} else if (numeroUno > numeroDos){
    alert("El numero "+ numeroUno +" es mayor a "+ numeroDos);
} else {
    alert("El numero "+ numeroDos +" es mayor a "+ numeroUno);
}