var nombresDos = ["Leonel", "Nahir", "Armando", "Beatriz"];
document.write("<h2>Segundo nombre</h2>");
for (let posicion in nombresDos) {
  document.write("<li>" + nombresDos[posicion] + "</li>");
}
