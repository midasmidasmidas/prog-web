console.log("chao mundo");

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let error1 = document.getElementById("error1"); // label vacio para usar como error al lado del nombre

let btnEnviar = document.getElementById("btnEnviar");

let nombreV = "";
let apellidoV = "";

btnEnviar.addEventListener("click", (e)=> {
            e.preventDefault();

            nombreV = nombre.value
            apellidoV = apellido.value

            if(nombreV === "")
            {
                error1.innerHTML = "Debe ingresar nombre";
                error1.style.color = "red";
                return;
            }

            console.log("Nombre: " + nombreV + " Apellido: " + apellidoV); // concatenacion (usando el signo +)
            console.log(`Nombre: ${nombreV}, Apellido: ${apellidoV}`); // interpolacion (usando el backtick, dolar, y corchetes)
            
            console.log("tamo bien");
        });