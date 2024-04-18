import { sumar, restar } from "./operaciones.js"; // esto solo funciona si el <script> tiene el type="module"

let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let resultado = document.getElementById("resultado");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

let v_n1 = 0;
let v_n2 = 0;
let v_res = 0;

let btnSumar = document.getElementById("btnSumar");
let btnRestar = document.getElementById("btnRestar");

btnSumar.addEventListener("click", function(){

    if(numero1.value === "")
    {
        error1.innerHTML = "ERROR: Ingresar primer numero";
        error1.style.color = "red";
    }

    if(numero2.value === "")
    {
        error2.innerHTML = "ERROR: Ingresar segundo numero";
        error2.style.color = "red";
    }

    v_res = sumar(numero1.value, numero2.value);
    resultado.innerHTML = v_res;
    
    console.log(`${v_res}`);
});

btnRestar.addEventListener("click", function(){

    if(numero1.value === "")
    {
        error1.innerHTML = "ERROR: Ingresar primer numero";
        error1.style.color = "red";
    }

    if(numero2.value === "")
    {
        error2.innerHTML = "ERROR: Ingresar segundo numero";
        error2.style.color = "red";
    }

    v_res = restar(numero1.value, numero2.value);
    resultado.innerHTML = v_res;
    
    console.log(`${v_res}`);
});