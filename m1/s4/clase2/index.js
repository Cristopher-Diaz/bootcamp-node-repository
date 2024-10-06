const fs = require('fs/promises')
const axios = require('axios')



const randomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber - 1)

const readFile = async () => {
    const data = await fs.readFile('datos.txt')
    const arrayData =JSON.parse(data)

    const param = arrayData[randomNumber(arrayData.length)]
    console.log(param)

    const resp = await axios.get(`https://jsonplaceholder.typicode.com/${param}`)
    console.log(resp.data)

    console.log(param)

}

readFile()
