let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

let v_n1 = 0;
let v_n2 = 0;

let btnSumar = document.getElementById("btnSumar");

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
    
    console.log(`${v_n1 + v_n2}`);
});