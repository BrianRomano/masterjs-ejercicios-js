var nombres = ["Brian", "Melany", "Vilma", "Mario"];
//Añadir un elemento al array 'nombres'
nombres.push("Beazle");
//Añadir un elemento al array 'nombres' a traves de un 'prompt'
nombres.push(prompt("Introduce un nuevo elemento al array 'nombres': "));
//Añadir un elemento al array 'nombres' a traves de un 'prompt'
nombres.push(prompt("Introduce un segundo elemento al array 'nombres': "));
//Eliminar el ultimo elemento ingresado con el metodo 'pop'
nombres.pop();
console.log(nombres);
//Buscar un elemento en el array con el metodo 'indexOf'
var posicion = nombres.indexOf("Beazle");
console.log(
  "Beazle se encuentra en la posicion " + posicion + " del array 'nombres'"
);
//Eliminar un elemento en el array con el metodo 'slice'
nombres.splice(posicion, 1);
console.log(nombres);
//Convertir un array en string
var nombresCadena = nombres.join();
console.log(nombresCadena);
//Convertir un string en un array
var nombresNuevoArray = nombresCadena.split(",");
console.log(nombresNuevoArray);