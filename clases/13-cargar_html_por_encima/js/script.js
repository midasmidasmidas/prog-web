$(document).ready(function(){

    function obtenerDigimones(){
        $("#obtenerDigimones").click(function(){
            $.ajax({
                url: "https://digimon-api.vercel.app/api/digimon",
                type: "GET",
                success: function(data){
                  mostrarDigimones(data);
                },
                error: function(xhr, status, error){
                  console.error("Error al obtener los datos", error);
                }
            });
        })
    }

	function mostrarDigimones(digimones){
		console.log("wep los digimones");
	}

	obtenerDigimones();

	// ejemplo de solicitud/request tipo POST
	$("#submit-form").click(function(){
		let formData = { username: $("#username").val(), password: $("#password").val() };
		$.ajax({
			url: "https://ejemplo.com/login",
			type: "POST",
			dataType: "json",
			data: JSON.stringify(formData),
			success: function(response){
				console.log("Respuesta del servidor: ", response);
			},
			error: function(xhr, status, error){
				console.log("Error en la solicitud: ", error);
			}
		})
	})
})