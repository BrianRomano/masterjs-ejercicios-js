//Recorrer un array con el metodo 'forEach'
var nombres = ["Brian", "Melany", "Mario", "Vilma"];
//El primer parametro es el valor del lo extraido del 'array' y el segundo es el indice del 'array'
nombres.forEach((elemento, posicion) => {
  document.write("<li>" + posicion + " - " + elemento + "</li>");
});
