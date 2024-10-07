const readFile = require('./readFile')
const writeFile = require('./writeFile')

const argumentsInput = process.argv.slice(2)

const verifyInputOption = () => {
    if (argumentsInput[0] === 'read') {
        return readFile()
    } else if (argumentsInput.length === 2) {
        const color = argumentsInput[0]
        const score = parseInt(argumentsInput[1])

        if (isNaN(score)) {
            console.log('Invalid score. Please provide a valid number for the score')
        } else {
            return writeFile(color, score)
        }
    } else {
        console.log('Invalid input. Use: node index.js read or node index.js <color> <score>')
    }
}

verifyInputOption()

