'use strict'

/*Ejercicio 3: Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario*/

var numeroUno = parseInt(prompt("Introduce el primer numero"));
var numeroDos = parseInt(prompt("Introduce el segundo numero"));


for(var i = numeroUno; i <= numeroDos; i++){
    console.log(i);
}