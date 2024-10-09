const express = require('express')
const app = express()
const PORT = 3000

// HBS
const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials', (err) => {})
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

// app.use(express.static(__dirname + '/public'))

// Rutas
app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' })
})

app.get('/support', (req, res) => {
  res.render('support', {
    title: '¿Cómo podemos ayudarte?',
    status: false,
    support: 'Recuperacion de contraseña'
  })
})

app.get('/games', (req, res) => {
  res.render('games', {
    title: 'Juegos',
    status: true,
    games: ['Finals', 'GOW', 'Elden Ring'],
    listGames: [
        {id: 1, name: 'Valorant', genero: 'Shooter'},
        {id: 2, name: 'Warframe', genero: 'ChupaAlma'},
        {id: 3, name: 'Finals', genero: 'Shooter'},
        {id: 4, name: 'Overwatch', genero: 'Acción por equipo'}
    ]
  })
})


// Server
app.listen(PORT, () => {
    console.log(`SERVER RUNNIG IN http://localhost:${PORT}`)
})