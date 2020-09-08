window.addEventListener("load", () => {
  //JSON
  var nombres = {
    padre: "Mario",
    madre: "Vilma",
    hijo: "Brian",
    hija: "Melany",
  };
  console.log(nombres);
  //Mostrar unicamente objeto 'hijo'
  console.log(nombres.hijo);
  //Cambiar el contenido del objeto 'madre' y mostrar
  nombres.madre = "La Vilma";
  console.log(nombres.madre);
  //Guardar JSON en un array y mostrar en consola
  var arrayNombres = [
    {
      nombre: "Brian",
      apellido: "Romano",
      edad: 21,
    },
    {
      nombre: "Melany",
      apellido: "Romano",
      edad: 20,
    },
  ];
  console.log(arrayNombres);
  //Mostrar en pantalla el JSON 'nombres'
  //Campto el ID y lo guardo en una variable
  var nombresJson = document.querySelector("#nombresJSON");
  var indice;
  for (indice in arrayNombres) {
    //Creo una variable para los parrafos
    var parrafos = document.createElement("p");
    //Con el metodo append, me aseguro que el contenido ingresará dentro del parrafo
    parrafos.append(
      arrayNombres[indice].nombre + " " + arrayNombres[indice].apellido
    );
    nombresJson.append(parrafos);
  }
});
