$("document").ready(function(){
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    $("#btnSumar").click(function()
    {
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();
        if(numero1 === "")
        {
            $("#error1").text("DEBE INSERTAR PRIMER NUMERO");
            $("#error1").css("color", "red");
            return;
        }

        numero2 = $("#numero2").val();
        if(numero2 === "")
        {
            $("#error2").text("DEBE INSERTAR SEGUNDO NUMERO");
            $("#error2").css("color", "red");
            return;
        }

        resultado = parseInt(numero1) + parseInt(numero2);
        console.log(resultado);
        $("#resultado").text(resultado);
        $("#resultado").css("fontSize", "5rem");
        limpiar();
    });

    function limpiar()
    {
        $("#numero1").val("");
        $("#numero2").val("");
        $("#resultado").val("");
    }
});
