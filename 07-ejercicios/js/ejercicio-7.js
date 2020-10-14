'use strict'

/*Ejercicio 7: Tabla de multiplicar de un numero ingresado*/

var numero = parseInt(prompt("Introduce el numero de la tabla"));

while(isNaN(numero) || numero < 0){
    numero = parseInt(prompt("Introduce el numero de la tabla"));
}

for(var i = 1; i <= 10; i++){
     console.log(i+"x"+numero+"="+(i*numero)); 
}