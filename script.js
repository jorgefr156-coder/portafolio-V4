
const botonTema = document.querySelector("#btn-color");

function alternarTema() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "#f5f5f5"; 
        document.body.style.color = "#333";             
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
botonTema.addEventListener("click", alternarTema);



const todasLasTarjetas = document.querySelectorAll(".proyecto-card");

todasLasTarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", function() {
        const nombreProyecto = tarjeta.querySelector("h3").innerText;
        alert("Has hecho clic en el proyecto: " + nombreProyecto);
    });
});



const botonContacto = document.querySelector("#btn-contacto");
const mensajeGracias = document.querySelector("#mensaje-gracias");

botonContacto.addEventListener("click", function() {
    mensajeGracias.innerText = "¡Gracias por tu interés! Me pondré en contacto contigo muy pronto.";
    mensajeGracias.style.display = "block"; 
});



function crearContadorProyectos() {
    let count = 4; 
    
    return function() {
        count++;
        return count;
    };
}

const agregarProyecto = crearContadorProyectos();

const botonSumar = document.querySelector("#btn-sumar-proyecto");
const textoContador = document.querySelector("#texto-contador");

botonSumar.addEventListener("click", function() {
    const nuevoTotal = agregarProyecto(); 
    textoContador.innerText = "Proyectos completados: " + nuevoTotal;
});