//Capturar elemento HTML con ID "saludo", utilizando 'document.getElementById'
var saludo = document.getElementById("saludo");
console.log(saludo);
//Mostrar en consola el elemento HTML, con el metodo 'innerHTML'
console.log(saludo.innerHTML);
//Cambiar el elemento HTML, con el metodo 'innerHTML'
saludo.innerHTML = "Adios";
console.log(saludo.innerHTML);
//Capturar elemento HTML con Clase "nombre", utilizando 'document.querySelector'
var nombre = document.querySelector(".nombre");
console.log(nombre);
//Mostrar en consola el elemento HTML, con el metodo 'innerHTML'
console.log(nombre.innerHTML);
//Cambiar el elemento HTML, con el metodo 'innerHTML'
nombre.innerHTML = "Melany";
console.log(nombre.innerHTML);
//Capturar elementos HTML por tipo de etiqueta, utilizando 'document.getElementsByTagName'
var todosLosP = document.getElementsByTagName("p");
console.log(todosLosP);
//Modificar etiqueta P y mostrar con propiedad 'textContent'
console.log(todosLosP[1].textContent);
