const axios = require('axios')

// axios.get('https://pokeapi.co/api/v2/pokemon/dittosss')
//     .then(resp => {
//         console.log(resp.data)
//     })
//     .catch(error => {
//         console.error(error)
//     })


const getPokemon = async() => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        console.log(data)

    } catch (err) {
        console.error(err)
    }
}

getPokemon()