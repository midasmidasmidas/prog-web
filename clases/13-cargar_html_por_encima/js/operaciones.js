import { getCharacters } from "./getCharacters.js"

let loadedCharacters = [];
let currentPage = 1;
let isLoading = false;

export const loadMoreCharacters = async() => {
    if(isLoading) return;

    currentPage++;
    const characters = await getCharacters(currentPage);
    if(characters.length > 0)
        createCharacterCards(characters);
    else
        alert("No hay mas personajes a cargar.");

    isLoading = false;
}

export const loadInitialCharacters = async() => {
    const characters = await getCharacters();
    createCharacterCards(characters);
}

export const loadOneCharacter = async (personaje) => {

    let char = personaje[0];    
                                
    let personajesRow = document.getElementById("personajesRow");
    personajesRow.innerHTML = '';    

    console.log(char);
    console.log(typeof(char));

    if(char)
        createOneCharacterCard(char);
    else
        return;
}

const enviarData = (id , name , race , ki , description , image , maxKi , gender) => {
    const rutaArchivoHTML = "../personaje.html"; // doble punto para ir al directorio anterior
    
    // Realiza una solicitud para obtener el contenido del archivo HTML
    fetch(rutaArchivoHTML)
        .then(response => response.text())
        .then(html => {

        // Una vez que hayas obtenido el contenido del archivo HTML, puedes manipularlo
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Modifica el contenido del archivo HTML como desees
        const imagePage = doc.getElementById('imagePage');
        imagePage.src = image;

        const namePage = doc.getElementById('name');
        namePage.textContent = name;

        const racePage = doc.getElementById('race');
        racePage.textContent = `Raza : ${race}`;

        const kiPage = doc.getElementById('ki');
        kiPage.textContent = `Ki : ${ki}`;

        const maxKiPage = doc.getElementById('maxKi');
        maxKiPage.textContent = `Ki Máximo : ${maxKi}`;

        const descPage = doc.getElementById('description');
        descPage.textContent = description;

        // Convierte el documento de nuevo a una cadena de texto HTML
        const nuevoHTML = new XMLSerializer().serializeToString(doc);

        // Finalmente, puedes usar el nuevo HTML como desees, por ejemplo, inyectándolo en tu página actual
        document.body.innerHTML = nuevoHTML;
    })
    .catch(error => {
        console.error('Error al cargar el archivo HTML:', error);
    });
}

export const createCharacterCards = async(characters) => {

    const personajesRow = document.getElementById("personajesRow");

    characters.map((character) => {
        const { id, name, race, ki, description : desc, image, maxKi, gender } = character; // alias al description para que solo tenga que escribir desc

        if(!loadedCharacters.includes(id)) {
            loadedCharacters.push(id);

            const divRow = document.createElement("div");
            divRow.classList.add("col-xl-3");
            divRow.classList.add("col-lg-3");
            divRow.classList.add("col-md-3");
            divRow.classList.add("col-sm-12");
            divRow.classList.add("col-xs-12");

            const card = document.createElement("div");
            card.classList.add("card");
            card.classList.add("mt-2");
            card.classList.add("mb-2");

            const imgCard = document.createElement("img");
            imgCard.classList.add("card-img-top");
            imgCard.classList.add("mt-2");
            imgCard.classList.add("mx-auto");
            imgCard.classList.add("w-75");
            imgCard.src = image;

            const divBody = document.createElement("div");
            divBody.classList.add("card-body");
            divBody.classList.add("text-center");
            divBody.classList.add("mx-auto");

            const tituloCharacter = document.createElement("h5");
            tituloCharacter.classList.add("card-title");
            tituloCharacter.textContent = name;

            const levelCharacter = document.createElement("p");
            levelCharacter.classList.add("card-text");
            levelCharacter.textContent = ki;

            const btnVer = document.createElement('button');
            btnVer.classList.add('btn');
            btnVer.classList.add('btn-primary');
            btnVer.classList.add('text-center');
            btnVer.classList.add('mx-auto');

            btnVer.textContent = 'Ver detalles';
            btnVer.addEventListener("click", () => enviarData(id, name, race, ki, desc, image, maxKi, gender));
            // btnVer.addEventListener("click", ()=> {});

            divRow.appendChild(card);
            card.appendChild(imgCard);
            card.appendChild(divBody);

            divBody.appendChild(tituloCharacter);
            divBody.appendChild(levelCharacter);
            divBody.appendChild(btnVer);

            personajesRow.appendChild(divRow); 
        }
    })
}

export const createOneCharacterCard = async (character) => {

    const personajesRow = document.getElementById('personajesRow');
     
    const { id, name, race, ki, description, image, maxKi, gender } = character;

    const divRow = document.createElement('div');
    divRow.classList.add("col-xl-3");
    divRow.classList.add("col-lg-3");
    divRow.classList.add("col-md-3");
    divRow.classList.add("col-sm-12");
    divRow.classList.add("col-xs-12");

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mt-2");
    card.classList.add("mb-2");

    const imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    imgCard.classList.add("mt-2");
    imgCard.classList.add("mx-auto");
    imgCard.classList.add("w-75");
    imgCard.src = image;

    const divBody = document.createElement("div");
    divBody.classList.add("card-body");
    divBody.classList.add("text-center");
    divBody.classList.add("mx-auto");

    const tituloC = document.createElement("h5");
    tituloC.classList.add("card-title");
    tituloC.textContent = name;

    const levelC = document.createElement("p");
    levelC.classList.add("card-text");
    levelC.textContent = ki;

    const btnVer = document.createElement("button");
    btnVer.classList.add("btn");
    btnVer.classList.add("btn-primary");
    btnVer.classList.add("text-center");
    btnVer.classList.add("mx-auto");

    btnVer.textContent = "Ver detalles";
    btnVer.addEventListener("click", () => enviarData(id, name, race, ki, description, image, maxKi, gender));

    divRow.appendChild(card);
    card.appendChild(imgCard);
    card.appendChild(divBody);

    divBody.appendChild(tituloC);
    divBody.appendChild(levelC);
    divBody.appendChild(btnVer);

    personajesRow.appendChild(divRow);   
}