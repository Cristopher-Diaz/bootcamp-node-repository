const fs = require('fs/promises')

const writeFile = async (color, score) => {
    try {
        let fileData = await fs.readFile('data.txt', 'utf8')
        let dataObject = {}

        if (fileData.length !== 0) {
            dataObject = JSON.parse(fileData)
        }

        const newObject = { ...dataObject, [color]: score }

        await fs.writeFile('data.txt', JSON.stringify(newObject, null, 2))
        console.log('Data has been successfully added')
    } catch (error) {
        console.log('An error occurred while writing to the file')
        console.log(error)
    }
}

module.exports = writeFile
