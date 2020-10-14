var nombresDos = ["Leonel", "Nahir", "Armando", "Beatriz"];
//Buscar con una funcion utilizando 'find'
var busqueda = nombresDos.find(function (posicion) {
  return posicion == "Leonel";
});
console.log(busqueda);
//Buscar con una funcion de flecha utilizando 'find'
var busquedaDos = nombresDos.find((nombre) => nombre == "Nahir");
console.log(busquedaDos);
//Buscar un elemento con el metodo 'findIndex'
var busquedaTres = nombresDos.findIndex((nombre) => nombre == "Armando");
console.log(busquedaTres);
//Comparar valores con el metodo 'some'
var precios = [100, 200, 50, 25];
var busquedaPrecio = precios.some((precio) => precio <= 200);
console.log(busquedaPrecio);
