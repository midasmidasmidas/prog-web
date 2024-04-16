console.log("chao mundo");

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

let btnEnviar = document.getElementById("btnEnviar");

let nombreV = "";
let apellidoV = "";

btnEnviar.addEventListener("click", (e)=> {
            e.preventDefault();

            nombreV = nombre.value
            apellidoV = apellido.value

            console.log("Nombre: " + nombreV + " Apellido: " + apellidoV); // concatenacion (usando el signo +)
            console.log(`Nombre: ${nombreV}, Apellido: ${apellidoV}`); // interpolacion (usando el backtick, dolar, y corchetes)
            
            console.log("tamo bien");
        });