//Función que cambiara el color del boton
function cambiaColor() {
  console.log("Cambiaste de color");
  var color = boton.style.background;
  if (color == "red") {
    boton.style.background = "green";
  } else {
    boton.style.background = "red";
  }
}
//Variable que capta el boton
var boton = document.querySelector("#boton");
//Utilización de 'addEventListener' y el evento 'click', con la función flecha que llama a la función 'cambia color'
boton.addEventListener("click", () => {
  cambiaColor();
});
//Evento 'mouseover'
boton.addEventListener("mouseover", () => {
  boton.style.background = "orange";
});
//Evento 'mouseout'
boton.addEventListener("mouseout", () => {
  boton.style.background = "#ccc";
});
