//Remplazar una palabra, utilizando 'replace'
var saludo = "Buen dia Brian Romano";
var remplazo = saludo.replace("Brian", "Melany");
console.log(remplazo);
//Crear un un nuevo string, a partir de la posicion de caracteres de otro string, utilizando 'slice'
var remplazoDos = saludo.slice(9, 15);
console.log(remplazoDos);
//Meter en un array el string
var remplazoTres = saludo.split();
console.log(remplazoTres);
//Recorte de espacios de un string, utilizando el metodo 'trim'
var saludoDos = "          Hola como va";
var recorte = saludoDos.trim();
console.log(recorte);