//Resto de frutas sera el tercer parametro que guardara los parametros restantes.
function listadoFrutas(frutaUno, frutaDos, ...restoDeFrutas) {
  console.log("1. fruta: " + frutaUno);
  console.log("2. fruta: " + frutaDos);
  console.log(restoDeFrutas);
}
listadoFrutas("Manzana", "Naranja", "Banana", "Pera", "Mandarina");
