'use strict'

window.addEventListener('load', function(){
    
    var formulario = document.querySelector("#formulario"); 
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display="none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;
        var datosUsuario = [nombre, apellido, edad];

        if(nombre.trim() == null || nombre.trim().length == 0 || !isNaN(nombre)){
            alert("Nombre no valido");
            document.querySelector("#errorNombre").innerHTML = "El nombre no es valido";
            return false;
        }else{
            document.querySelector("#errorNombre").style.display = "none";
        }

        if(apellido.trim() == null || apellido.trim().length == 0 || !isNaN(apellido)){
            alert("Apellido no valido");
            document.querySelector("#errorApellido").innerHTML = "El apellido no es valido";
            return false;
        } else {
            document.querySelector("#errorApellido").style.display = "none";
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("Edad no valida");
            document.querySelector("#errorEdad").innerHTML = "La edad no es valida";
            return false;
        } else {
            document.querySelector("#errorEdad").style.display = "none";
        }

        box_dashed.style.display="block";

        for(var indice in datosUsuario){
            var parrafo = document.createElement("p");
            parrafo.append(datosUsuario[indice]);
            box_dashed.append(parrafo)
        }
    })
});