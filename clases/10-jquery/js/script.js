let numero1 = 0;
let numero2 = 0;

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
});
