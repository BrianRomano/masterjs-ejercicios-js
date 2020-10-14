/*El parametro opcional es 'mostrar' y esta inicializado en 'false'
Se le va a pasar un parametros booleano para que muestre por consola o en pantalla*/
function calculadora(numeroUno, numeroDos, mostrar = false) {
  if (mostrar == true) {
    document.write("<li>Suma: " + (numeroUno + numeroDos) + "</li>");
    document.write("<li>Resta: " + (numeroUno - numeroDos) + "</li>");
    document.write("<li>Multiplicación: " + numeroUno * numeroDos + "</li>");
    document.write("<li>División: " + numeroUno / numeroDos + "</li>");
  } else {
    console.log("Suma: " + (numeroUno + numeroDos));
    console.log("Resta: " + (numeroUno - numeroDos));
    console.log("Multiplicación: " + numeroUno * numeroDos);
    console.log("División: " + numeroUno / numeroDos);
  }
}
calculadora(3, 3, true);
