const http = require('http')
const fs = require('fs/promises')
const { v4: uuidv4 } = require('uuid')

const animeFilePath = './anime.json'

// Función para leer los datos de animes
const readData = async () => {
    try {
        const data = await fs.readFile(animeFilePath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.error('Error leyendo el archivo:', error)
        throw new Error('Error al leer los datos de los animes')
    }
}

// Función para guardar los datos de animes
const saveData = async (data) => {
    try {
        await fs.writeFile(animeFilePath, JSON.stringify(data, null, 2))
    } catch (error) {
        console.error('Error guardando archivo:', error)
        throw new Error('Error al guardar los datos de los animes')
    }
}

// Servidor
const server = http.createServer(async (req, res) => {
    try {
        const data = await readData()

        if (req.url === '/animes' && req.method === 'GET') {
            // Listar todos los animes
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(data))
        } else if (req.url.startsWith('/anime/') && req.method === 'GET') {
            // Obtener un anime por ID
            const id = req.url.split('/')[2]
            const anime = data[id]
            if (anime) {
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(anime))
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.end('Anime no encontrado')
            }
        } else if (req.url === '/anime' && req.method === 'POST') {
            // Crear un nuevo anime
            let body = ''
            req.on('data', chunk => body += chunk)
            req.on('end', async () => {
                try {
                    const newAnime = JSON.parse(body)
                    const newId = uuidv4() // Generar ID único
                    data[newId] = newAnime
                    await saveData(data)
                    res.writeHead(201, { 'Content-Type': 'application/json' })
                    // res.end(JSON.stringify(newAnime))
                    res.end(JSON.stringify({
                        id: newId,
                        data: newAnime,
                        message: 'Anime creado con éxito'
                    }))
                } catch (error) {
                    res.writeHead(400, { 'Content-Type': 'text/plain' })
                    res.end('Error al crear el anime')
                }
            })
        } else if (req.url.startsWith('/anime/') && req.method === 'PUT') {
            // Actualizar un anime por ID
            const id = req.url.split('/')[2]
            let body = ''
            req.on('data', chunk => body += chunk)
            req.on('end', async () => {
                try {
                    if (data[id]) {
                        const updatedAnime = JSON.parse(body)
                        data[id] = { ...data[id], ...updatedAnime } // Actualizar campos
                        await saveData(data)
                        res.writeHead(200, { 'Content-Type': 'application/json' })
                        // res.end(JSON.stringify(data[id]))
                        res.end(JSON.stringify({
                            id,
                            data: data[id],
                            message: 'Anime actualizado con éxito'
                        }))
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/plain' })
                        res.end('Anime no encontrado')
                    }
                } catch (error) {
                    res.writeHead(400, { 'Content-Type': 'text/plain' })
                    res.end('Error al actualizar el anime')
                }
            })
        } else if (req.url.startsWith('/anime/') && req.method === 'DELETE') {
            // Eliminar un anime por ID
            const id = req.url.split('/')[2]
            if (data[id]) {
                const deletedAnime = data[id]
                delete data[id]
                await saveData(data)
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({
                    id,
                    data: deletedAnime,
                    message: 'Anime eliminado con éxito'
                }))
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.end('Anime no encontrado')
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('Ruta no encontrada')
        }
    } catch (error) {
        // Manejar cualquier error general del servidor
        console.error('Error en el servidor:', error)
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Error interno del servidor')
    }
})


const PORT = 3000
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
