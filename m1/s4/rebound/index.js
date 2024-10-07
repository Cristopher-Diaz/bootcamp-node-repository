const fs = require('fs/promises')
const axios = require('axios')

const randomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber - 1)

const readFile = async () => {
    const data = await fs.readFile('pokemons.txt')
    const arrayData =JSON.parse(data)
    const param = arrayData[randomNumber(arrayData.length)]

    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`)
    console.log(resp.data)

}

readFile()