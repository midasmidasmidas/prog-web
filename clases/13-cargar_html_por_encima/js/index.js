const getCharacters = async() => {
	try {

		const response = await fetch(`https://dragonball-api.com/api/characters?page=1&limit=8`);
		const data = await response.json();

		return data.items;

	} catch (error) {
		console.log(`El error es: ${error}`);
	}
}

getCharacters()
	.then(data => console.log(data)) // estas funciones tienen parentesis y corchetes removidos para acortarlas
	.catch(error => console.log(error))