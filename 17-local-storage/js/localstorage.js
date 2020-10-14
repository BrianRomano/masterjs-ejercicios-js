window.addEventListener("load", () => {
  //Comprobar si el local storage esta disponible en mi navegador
  if (typeof Storage != "undefined") {
    console.log("Local Storage disponible");
  } else {
    console.log("Local Storage no disponible");
  }
  //Guardar datos en el local storage paremetros = (key, value)
  localStorage.setItem("nombre", "Brian Romano");
  //Captar datos del local storage y mostrarlo en pantalla
  document.querySelector("#localstorage").innerHTML = localStorage.getItem(
    "nombre"
  );
  //Guardar objeto JSON-String en local storage
  var informacion = {
    cumpleaños: "18/11/1998",
    nacimiento: 1998,
    edad: 21,
  };
  localStorage.setItem("info", JSON.stringify(informacion));
  //Captar objeto JSON-String del local storage, convertirlo a un JSON puro y mostrarlo en consola
  var infoJson = JSON.parse(localStorage.getItem("info"));
  console.log(infoJson);
  //Mostrar el objeto en pantalla y un elemento del objeto
  document.querySelector("#localstorage").append(" - " + infoJson.cumpleaños);
  //Eliminar datos del local storage
  localStorage.removeItem("nombre");
});
