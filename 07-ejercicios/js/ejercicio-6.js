'use strict'

/*Ejercicio 6: Hacer un programa que diga si un numero es par o impar*/

var numero = parseInt(prompt("Introduce un numero"));

while(isNaN(numero)){
    numero = parseInt(prompt("Introduce un numero"));
}

if(numero%2 == 0 ){
    alert("El numero "+numero+" es par");
} else {
    alert("El numero "+numero+" es impar");
}