//Busqueda de una palabra en un string, utilizando 'indexOf'
var nombre = "Brian Romano";
var busqueda = nombre.indexOf("Romano");
console.log(busqueda);
//Busqueda de una palabra en un string, utilizando 'lastIndexOf'
var saludo = "Aloha Brian Romano, Aloha";
var busquedaDos = saludo.lastIndexOf("Aloha");
console.log(busquedaDos);
//Busqueda de una palabra utilizando 'match'
var busquedaTres = nombre.match("Romano");
console.log(busquedaTres);
//Busqueda de varias palabras iguales dentro de un string, utilizando 'match'
var busquedaCuatro = saludo.match(/Aloha/g);
console.log(busquedaCuatro);
//Busqueda de una palabra pasandole como parametro la posicion y la cantidad de caracteres, utilizando 'substr'
var busquedaCinco = saludo.substr(6, 12);
console.log(busquedaCinco);
//Busqueda de un caracter, utilizando 'charAt'
var busquedaSeis = nombre.charAt(6);
console.log(busquedaSeis);
//Busqueda de palabra/caracter al inicio de un string, utilizando 'startsWith'
var busquedaSiete = saludo.startsWith("Aloha");
console.log(busquedaSiete);
//Busqueda de palabra/caracter al final de un string, utilizando 'endWith'
var busquedaOcho = nombre.endsWith("Brian");
console.log(busquedaOcho);
//Busqueda de una palabra/caracter, utilizando 'includes'
var busquedaNueve = saludo.includes("Brian");
console.log(busquedaNueve);
