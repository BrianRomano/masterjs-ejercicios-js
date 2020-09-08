"use strict";
window.addEventListener("load", () => {
  //Petición AJAX, utilizando 'fetch'
  fetch("https://jsonplaceholder.typicode.com/users")
    //Promesa que recoge los datos con el metodo 'then', guarda en datos y los pasa a 'JSON'
    .then((datos) => datos.json())
    //Recoge datos y los guardo en un array y muestra el array por consola, con todos los 'JSON' solicitados a la API
    .then((datos) => {
      //Array donde guardare los datos JSON
      var usuarios = [];
      usuarios = datos;
      //Mostrar por consola
      console.log(usuarios);
      /*Mostrar la lista de usuarios (Nombre y apellido en pantalla)
      Guardo DIV - USUARIOS, en una variable*/
      var divUsuarios = document.querySelector("#usuarios");
      //Recorro el array con el metodo 'map'
      usuarios.map((usuario, indice) => {
        //Creo el elemento donde se almacenará y mostrara los datos del array
        let nombres = document.createElement("h3");
        //Se pasa a HTML la información extraida
        nombres.innerHTML =
          indice + ". " + usuario.name + "  - Email: " + usuario.email;
        //Se muestran los datos dentro del div
        divUsuarios.append(nombres);
        //Ocultar mensaje de 'cargando'
        document.querySelector(".cargando").style.display = "none";
      });
    });
});
