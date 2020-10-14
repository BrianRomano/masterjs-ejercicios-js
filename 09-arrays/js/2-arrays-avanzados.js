var nombres = ["Brian", "Melany", "Mario", "Vilma"];
console.log(nombres);
//Verificar cantidad de elementos de un array con 'length'
console.log("Longitud del array: " + nombres.length);
//Ingresar a traves de un prompt la posición del array a mostrar
var posicion = parseInt(
  prompt("¿Que posición deseas ver del array 'nombres'?")
);
if (posicion >= nombres.length) {
  alert("Ingresa un numero menor a 4");
} else {
  alert(nombres[posicion]);
}
//Recorrer un array con 'for' y mostrarlo en pantalla
document.write("<h1>Nombres</h1>");
document.write("<ul>");
for (var i = 0; i < nombres.length; i++) {
  document.write("<li>" + nombres[i] + "</li>");
}
document.write("</ul>");
