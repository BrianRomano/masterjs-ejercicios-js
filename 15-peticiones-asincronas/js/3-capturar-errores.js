"use strict";
window.addEventListener("load", () => {
  try {
    //Declaro un variable
    var nombre = "Brian";
    //Me equivoco queriendo utilizar la variable 'nombre', llamandola de otra forma
    alert(nombreBrian);
  } catch (error) {
    //Muestra el error por consola
    console.log(error);
  }
});
