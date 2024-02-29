// verde - amarillo - rojo - verde

let rojo = document.getElementById("rojo");
let amarillo = document.getElementById("amarillo");
let verde = document.getElementById("verde");

function semaforo(){
    console.log("1");
    if(rojo.dataset.activo == "true"){
        rojo.style.backgroundColor = "rgba(255, 0, 0, 1)"; 
        amarillo.style.backgroundColor = "rgba(255, 255, 0, 0.3)";
        verde.style.backgroundColor = "rgba(0, 128, 0, 0.3)";

        rojo.dataset.activo = "false";
        verde.dataset.activo = "true";
     }
     else if(amarillo.dataset.activo == "true"){
         amarillo.style.backgroundColor = "rgba(255, 255, 0, 1)";
         rojo.style.backgroundColor = "rgba(255, 0, 0, 0.3)"; 
         verde.style.backgroundColor = "rgba(0, 128, 0, 0.3)";

         amarillo.dataset.activo = "false";
         rojo.dataset.activo = "true";
     }
     else if(verde.dataset.activo == "true"){
         verde.style.backgroundColor = "rgba(0, 128, 0, 1)";
         rojo.style.backgroundColor = "rgba(255, 0, 0, 0.3)"; 
         amarillo.style.backgroundColor = "rgba(255, 255, 0, 0.3)";

         verde.dataset.activo = "false";
         amarillo.dataset.activo = "true";
     }
}

  setInterval(semaforo, 2000);
