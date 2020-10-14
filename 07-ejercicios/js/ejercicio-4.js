'use strict'

/*Ejercicio 4: Mostrar todos los numeros impares que hay entre dos numeros introducidos opor el usuario*/

var numeroUno = parseInt(prompt("Introduce el primer numero", 0));
var numeroDos = parseInt(prompt("Introduce el segundo numero", 0)); 

while(numeroUno < numeroDos){
    numeroUno++;

    if(numeroUno%2 != 0 ){
        console.log("El numero "+numeroUno+" es impar");
    }
}
