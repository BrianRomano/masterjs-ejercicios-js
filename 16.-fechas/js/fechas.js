"use strict";
window.addEventListener("load", () => {
  //Guardo en una variable, el objeto 'Date' y lo muestro en consola
  var fecha = new Date();
  //Capto datos de la variable fecha
  var year = fecha.getFullYear();
  var mes = fecha.getMonth();
  var dia = fecha.getDay();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  //Mostrar las variables previamente creadas en un plantilla de texto en la consola
  var plantillaFecha = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${horas}
    Los minutos son: ${minutos}
    Los segundos son: ${segundos}
    `;
    console.log(plantillaFecha);
});
