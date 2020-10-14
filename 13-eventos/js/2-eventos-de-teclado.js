//Variable que captura el input
var input = document.querySelector("#input");
//Evento Focus
input.addEventListener("focus", () => {
  console.log("Evento focus activado");
});
//Evento Blur
input.addEventListener("blur", () => {
  console.log("Evento blur activado");
});
//Evento Keydown
input.addEventListener("keydown", () => {
  console.log("Evento keydown activado");
});
//Evento Keypress
input.addEventListener("keypress", () => {
  console.log("Evento keypress activado");
});
//Evento Keyup
input.addEventListener("keyup", () => {
  console.log("Evento keyup activado");
});