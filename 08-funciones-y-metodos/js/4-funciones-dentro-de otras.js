//Funcion para mostrar por pantalla el resultado
function mostrarPantalla(numeroUno, numeroDos) {
  document.write("<br>");
  document.write("<li>Suma: " + (numeroUno + numeroDos) + "</li>");
  document.write("<li>Resta: " + (numeroUno - numeroDos) + "</li>");
  document.write("<li>Multiplicación: " + numeroUno * numeroDos + "</li>");
  document.write("<li>División: " + numeroUno / numeroDos + "</li>");
}
//Funcion para mostrar por consola el resultado
function mostrarConsola(numeroUno, numeroDos) {
  console.log("Suma: " + (numeroUno + numeroDos));
  console.log("Resta: " + (numeroUno - numeroDos));
  console.log("Multiplicación: " + numeroUno * numeroDos);
  console.log("División: " + numeroUno / numeroDos);
}
//Funcion principal que llama a las demás funciones
function calculadora(numeroUno, numeroDos, mostrar = false) {
  if (mostrar == true) {
    mostrarPantalla(numeroUno, numeroDos);
  } else {
    mostrarConsola(numeroUno, numeroDos);
  }
}
//Llamada a la funcion principal y pase de parametros
calculadora(5, 5, true);
