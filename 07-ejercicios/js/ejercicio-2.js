'use strict'

/*Ejercicio 2: Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir
un numero negativo y ahi mostrar el resultado*/

var suma = 0; 
var contador = 0;

do {
    numero = parseInt(prompt("Ingrese un numero", 0)); 

    if(isNaN(numero)){
        var numero = 0; 
    } else if (numero >= 0){
        suma += numero
        contador++;
    }

    console.log(suma);
    console.log(contador);
} while (numero >= 0);

alert("La suma es "+ suma +" y el promedio es "+(suma/contador));


