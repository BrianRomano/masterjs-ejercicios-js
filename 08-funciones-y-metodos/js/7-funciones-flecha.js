/*Funcion normal*/
function calculadora(numeroUno, numeroDos, mostrarSuma, mostrarSumaDoble) {
  var resultado = numeroUno + numeroDos;
  //Invoca a los parametros que contienen una funcion detras
  mostrarSuma(resultado);
  mostrarSumaDoble(resultado);
}
//Pasar parametros a la función principal 'calculadora' con funciones 'flecha'
calculadora(
  4,
  4,
  (dato) => {
    console.log("El resultado de la suma es: " + dato);
  },
  (dato) => {
    console.log("El resultado de la suma doble es: " + dato * 2);
  }
);
