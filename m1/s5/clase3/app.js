const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send('Estas en la pagina de contacto')
})

app.get('/contact', (req, res) => {
    res.send('Estas en la pagina de contacto')
})

app.listen(PORT, () => {
    console.log(`Server corriendo en http://localhost:${PORT}`)
})