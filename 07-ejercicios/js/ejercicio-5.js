'use strict'

/*Ejercicio 5: Muestre todos los numeros divisores de un numero introducido*/

var numero = parseInt(prompt("Introduce un numero", 0)); 

for(var i = 0 ; i <= numero; i++){

    if(numero % i == 0){
        console.log("Divisor: "+ i); 
    }
} 