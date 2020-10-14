'use strict'

/*Ejercicio: 
-Pedir 6 numeros por pantalla y los meta en un array
-Mostrar el array entero en el cuerpo de la pagina y la consola
-Ordenarlo y mostrarlo
-Invertir su orden y mostrarlo
-Mostrar cuantos elementos tiene el array
-Busqueda de un valor introucido por el usaurio, que nos diga si lo encuentra y su indice
*/

var numeros = new Array(6);

function mostrarArray(elementos, texto = "") {
    document.write("<h2>Contenido del array "+texto+"</h2>");
    elementos.forEach((elemento)=> {
        document.write("<strong>"+elemento+"</strong><br>");
    });
}

//Pedir los numeros
for(var i = 0; i < 6; i++){ 
    numeros[i] = parseInt(prompt("Introduce un numero"));
}

//Mostrar array por la consola
console.log(numeros);

//Mostrar en el cuerpo de la pagina
mostrarArray(numeros, "en el cuerpo de la página");

//Ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "ordenado");

//Invertir orden y mostrar
numeros.reverse(); 
mostrarArray(numeros, "en reversa");

//Mostrar cantidad de elementos del array
document.write("<h1>El array tiene "+numeros.length+" elementos</h1>");

//Busqueda de un valor
var busqueda = parseInt(prompt("Busca un numero"));
var buscado = numeros.findIndex(numero => numero == busqueda);

if(buscado && buscado != -1){
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posición de la busqueda "+buscado+"</h1>");
} else {
    document.write("<h1>No encontrado</h1>");
}
