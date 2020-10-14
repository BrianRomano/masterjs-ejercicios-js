"use strict";
window.addEventListener("load", () => {
  //Capto los div en variables para luego mostrar los datos por pantalla
  var masUsuarios = document.querySelector("#masUsuarios");
  var janet = document.querySelector("#janet");
  //Llamada de la función 'getUsuarios
  getUsuarios()
    //Guardar datos en formato JSON
    .then((data) => data.json())
    .then((users) => {
      //lLamada a la funcion 'listadoUsuarios' y pasarle como parametro 'users.data'
      listadoUsuarios(users.data);
      //Al finalizar, llamada a la funcion 'getJanet'
      return getJanet();
    })
    //Guardar datos en formato JSON
    .then((data) => data.json())
    .then((user) => {
      //Llamada a la funcion 'mostrarJanet' y pasarle como parametro 'user.data'
      mostrarJanet(user.data);
    })
    //Metodo para captar un error en las promesas
    .catch(error =>{
      alert("Hay una error en una promesa");
    });
  //Funcion que al ser convocada, hace la petitición 'Fetch' de Usuarios
  function getUsuarios() {
    return fetch("https://reqres.in/api/users?page=2");
  }
  //Funcion que al ser convocada, hace la petición 'Fetch' de Janet
  function getJanet() {
    return fetch("https://reqres.in/api/users/2");
  }
  //Funcion que al ser convocada, muestra por pantalla la lista de usuarios. Recibe como parametros 'users.data' y los almacena en 'usuarios'
  function listadoUsuarios(usuarios) {
    //Recorre 'usuarios' con el metodo 'map'
    usuarios.map((user, i) => {
      //Guarda en variable, la creacion de elementos donde luego se mostrara la informacion
      let nombre = document.createElement("h3");
      //Pasaje a HTML de los datos 'first_name' y 'last_name'
      nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
      //Muestra dentro de 'masUsuarios', lo que se guardaba en 'nombre'
      masUsuarios.append(nombre);
      //Elimina el mensaje 'cargando...', una vez que se muestran los datos en pantalla
      document.querySelector("#masUsuarios .cargando").style.display = "none";
    });
  }
  //Funcion que recibe como parametro 'user.data' y lo guarda en 'user'. Funcion que al ser convocada muestra los datos en pantalla
  function mostrarJanet(user) {
    //Guarda en variable, la creacion de elementos donde luego se mostrara la informacion
    let nombre = document.createElement("h3");
    //Pasaje a HTML de los datos 'first_name' y 'last_name'
    nombre.innerHTML = user.first_name + " " + user.last_name;
    //Muestra dentro de 'janet', lo que se guardaba en 'nombre'
    janet.append(nombre);
    //Elimina el mensaje 'cargando...', una vez que se muestran los datos en pantalla
    document.querySelector("#janet .cargando").style.display = "none";
  }
});
