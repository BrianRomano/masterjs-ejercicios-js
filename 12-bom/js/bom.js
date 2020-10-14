//Mostrar ancho de la pantalla
console.log(window.innerWidth);
//Mostrar alto de la pantalla
console.log(window.innerHeight);
//Mostrar ancho de la pantalla original
console.log(screen.width);
//Mostrar alto de la pantalla origianl
console.log(screen.height);
//Mostrar la url
console.log(window.location);
//Sacar la url del array, utilizando 'href'
console.log(window.location.href);
/*Redirigir a otra 'url'
En caso de combocar esta función, rediccionará la página a 'google.com'*/
function redirigir() {
  window.location.href = "https://www.google.com/";
}
/*Redirigir a otra 'url', pasandole la url
A esta función, le faltaria pasarle la url que pide en sus parametros*/

function redirigirDos(url) {
  window.location.href = url;
}
//Redirigir a otra 'url', pasandole la url, pero abriendo una pestaña nueva
function redirigirTres(url) {
  window.open(url);
}
