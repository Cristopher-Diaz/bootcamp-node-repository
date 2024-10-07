const fs = require('fs/promises');
const axios = require('axios');
const pokeAPIEndpoint = require('./api');  // Importar el punto de acceso API

// Función para generar un número aleatorio
const randomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

// Función para leer el archivo y convertirlo a un arreglo
const readPokemonFile = async () => {
    try {
        // Leer el archivo 'pokemons.txt'
        const data = await fs.readFile('pokemons.txt')
        const pokemonNames =JSON.parse(data)


        return pokemonNames;
    } catch (error) {
        console.error('Error al leer el archivo de Pokémon:', error);
        return [];
    }
};

// Función principal para obtener y mostrar los datos del Pokémon
const fetchPokemonData = async () => {
    // Leer los nombres de Pokémon desde el archivo
    const pokemonNames = await readPokemonFile();

    if (pokemonNames.length === 0) {
        console.log('No se encontraron nombres de Pokémon.');
        return;
    }

    // Seleccionar un Pokémon aleatorio
    const randomPokemon = pokemonNames[randomNumber(pokemonNames.length)];

    try {
        // Hacer la consulta a la API
        const { data } = await axios.get(`${pokeAPIEndpoint}${randomPokemon}`);

        // Usar destructuring para extraer los datos del Pokémon
        const { name, height, weight, abilities } = data;

        // Crear una descripción usando template literals
        const pokemonDescription = `
            Nombre: ${name}
            Altura: ${height}
            Peso: ${weight}
            Habilidades: ${abilities.map(a => a.ability.name).join(', ')}
        `;

        console.log(pokemonDescription);
    } catch (error) {
        console.error(`Error al obtener los datos de ${randomPokemon}:`, error);
    }
};

// Ejecutar la función principal
fetchPokemonData();
