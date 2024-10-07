const fs = require('fs/promises')

const readFile = async () => {
    try {
        const data = await fs.readFile('data.txt', 'utf8')
        if (data.length === 0) {
            console.log('The file is empty')
            return null
        } else {
            const parsedData = JSON.parse(data)
            console.log('File content:', parsedData)
            return parsedData
        }
    } catch (error) {
        console.log('An error occurred while reading the file')
        console.log(error)
    }
}

module.exports = readFile
