import { getPersonajes } from "./getPersonajes.js";

const crearCard = (results = []) => {
	let personajesRow = document.getElementById("personajesRow");

	results.map( (result) => {
		
        const { id , name : nameChar, species , status , image : imagen} = result;
        const { name : nameLoc , url } = location;
		
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

        const subtitleSpecies = document.createElement("p");
        subtitleSpecies.classList.add("card-text");
        subtitleSpecies.textContent = `Especie: ${species}`;

		const subtitleStatus = document.createElement("p");
        subtitleStatus.classList.add("card-text");
        subtitleStatus.textContent = `Estado: ${status}`;

        const btnVer = document.createElement("button");
        btnVer.classList.add("btn");
        btnVer.classList.add("btn-warning");
        btnVer.textContent = "Ver detalles";
        btnVer.addEventListener("click",()=> {
            enviarDatos(id , nameChar , species , status , imagen);
        });

		divCol.append(card);

		card.appendChild(image);
		card.appendChild(divBody);

		divBody.appendChild(title);
		divBody.appendChild(subtitleSpecies);
		divBody.appendChild(subtitleStatus);
		divBody.appendChild(btnVer);

		personajesRow.appendChild(divCol);
	});
}

getPersonajes()
	.then( (data) => {
		crearCard(data);
		console.log(data);
	})
	.catch( (error) => {
		console.log(`El error es: ${error}`);
	})