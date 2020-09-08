/*Ejemplo 'funcion anonima' que se guardara dentro de una variable.
Para pasarle el parametro, en la consola pondré 'pelicula("parametro");' */
var pelicula = function (nombre) {
  return "La pelicula es " + nombre;
};
/*Ejemplo 'funcion de callback' */
function calculadora(numeroUno, numeroDos, mostrarSuma, mostrarSumaDoble) {
  var resultado = numeroUno + numeroDos;
  //Invoca a los parametros que contienen una funcion detras
  mostrarSuma(resultado);
  mostrarSumaDoble(resultado);
}
//Pasar parametros a la funcioón principal 'calculadora'
calculadora(
  2,
  2,
  function (dato) {
    console.log("El resultado de la suma es: " + dato);
  },
  function (dato) {
    console.log("El resultado de la suma doble es: " + dato * 2);
  }
);
