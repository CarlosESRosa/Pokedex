const fetchPokemons = async () => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
	const data = await response.json();
	const arrayResult = [];
	for(let i = 0; i < data.results.length; i += 1 ) {
		const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`);
		const data2 = await response2.json();
		arrayResult.push({name: data2.name, image: data2.sprites.front_default})
	}
	return arrayResult;
}

const fetchTypes = async () => {
	const response = await fetch('https://pokeapi.co/api/v2/type/');
	const data = await response.json();
	const arrayResult = [];
	for(let i = 0; i < data.results.length; i += 1 ) {
		if(data.results[i].name !== 'unknown')
		arrayResult.push({ type: data.results[i].name})
	}
	return arrayResult;
}

const fetchPokemonTypes = async () => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
	const data = await response.json();
	const arrayResult = [];
	for(let i = 0; i < data.results.length; i += 1 ) {
		const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`);
		const data2 = await response2.json();
		for(let j = 0; j < data2.types.length; j += 1) {
			const response3 = await fetch(`https://pokeapi.co/api/v2/type/${ data2.types[j].type.name}`);
			const data3 = await response3.json();
			arrayResult.push({pokemon_id: data2.id, type_id: data3.id})
		}
	}
	return arrayResult;
}

module.exports = {fetchPokemons, fetchTypes, fetchPokemonTypes};