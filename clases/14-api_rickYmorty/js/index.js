import { getPersonajes } from "./getPersonajes.js";

const crearCard = (results = []) => {
	let personajesRow = document.getElementById("personajesRow");

	results.map( (result) => {
		
        const { id , name : nameChar, species , status , image : imagen} = result;
        const { name : nombreLoc , url } = location;
		
		const divCol = document.createElement("div");
		divCol.classList.add("col-xl-3");
		divCol.classList.add("col-lg-3");
		divCol.classList.add("col-md-3");
		divCol.classList.add("col-sm-12");
		divCol.classList.add("col-xs-12");
		divCol.classList.add("mt-2");
		divCol.classList.add("mb-2");

		const card = document.createElement("div");
		card.classList.add("card");

		const image = document.createElement("img");
        image.src = imagen;
        image.alt = `Imagen de: ${nameChar}`;
        image.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = `Nombre: ${nameChar}`;

        const subTitle = document.createElement("p");
        subTitle.classList.add("card-text");
        subTitle.textContent = `Especie: ${species}`;

		const subTitle2 = document.createElement("p");
        subTitle2.classList.add("card-text");
        subTitle2.textContent = `Estado: ${status}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn");
        btnVer.classList.add("btn-warning");
        btnVer.textContent = "Ver más";
        btnVer.addEventListener("click",()=> {
            enviarDatos(id , nameChar , species , status , imagen);
        });

	});
}

getPersonajes()
	.then( (data) => {
		console.log(data);
	})
	.catch( (error) => {
		console.log(`El error es: ${error}`);
	})