window.addEventListener("load", () => {
    //Set Invterval
    var tiempo = setInterval(()=>{
        console.log("setInterval activado");
        //Aca se podra colocar codigo de instrucciones que se deben realizar cada 3seg
    },3000);

    //Set time out
    var tiempo = setTimeout(()=>{
        console.log("setTimeout activado");
        //Aca se podra colocar codigo de instrucciones que se deben realizar cada 3seg
    },5000);
});
