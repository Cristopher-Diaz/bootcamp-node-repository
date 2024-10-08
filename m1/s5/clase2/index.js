const fs = require('fs/promises')
const argumentsInput = process.argv.slice(2)
const option = argumentsInput[0]
const prop = argumentsInput[1]
const value = argumentsInput[2]

let ojbData = {}

const readFile = async () => {
    try {
        const data = await fs.readFile('data.txt')
        if (data.length === 0) {
            return console.log('El archivo esta vacio!')
        }
        console.log(JSON.parse(data))
    } catch (error) {
        console.log('Ha ocurrido un error al leer: ', error)
    }
}

const writeFile = async () => {
    try {
        const data = await fs.readFile('data.txt')

        if (data.length !== 0) {
            ojbData = JSON.parse(data)
        }
        const newObj = { ...ojbData, [prop]: value }
        await fs.writeFile('data.txt', JSON.stringify(newObj, null, 2))
        console.log('Los datos de agregaron correctamente')
    } catch (error) {
        console.log('Ha ocurrido un error en la escritura: ', error)
    }
}

const deleteProp = async () => {
    try {
        const data = await fs.readFile('data.txt')

        if (data.length !== 0) {
            ojbData = JSON.parse(data)
        }

        if (ojbData.hasOwnProperty(prop)){
            delete ojbData[prop]
        } else {
            console.log(ojbData)
            return console.log('Esta propiedad no existe: ', prop)
        }

        await fs.writeFile('data.txt', JSON.stringify(ojbData, null, 2))
        console.log('Los datos han sido eliminados correctamente')

    } catch(error) {
        console.log('Ha ocurrido un error en la eliminación: ', error)
    }
}

const validateInput = () => {
    switch(option) {
        case 'leer':
            readFile()
            break;
        case 'agregar':
            writeFile()
            break;
        case 'eliminar':
            deleteProp()
            break;
        default: 
            verifyInputParams()
    }
}

const verifyInputParams = () => {
    if (argumentsInput.length === 0) {
        console.log('Por favor ejecutar programa con alguna de las sigueintes opciones:')
        console.log('Opción 1: leer')
        console.log('Opción 2: agregar <propiedad> <valor>')
        console.log('Opción 3: eliminar <propiedad> <valor>')
        return process.exit()
    }
}

validateInput()