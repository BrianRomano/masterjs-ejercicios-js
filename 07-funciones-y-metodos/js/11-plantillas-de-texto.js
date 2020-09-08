var nombre = prompt("Ingresa tu nombre:", "Nombre");
var apellido = prompt("Ingresa tu apellido:", "Apellido");

//Plantilla de texto
var texto = `
    <h1>Información personal</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h2>Mi apellido es: ${apellido}</h2>
`;
document.write(texto);
