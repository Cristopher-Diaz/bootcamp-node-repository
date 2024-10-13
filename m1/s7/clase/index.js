const http = require('http')
const fs = require('fs/promises')
const { v4: uuidv4 } = require('uuid')

http.createServer( async(req, res) => {
    const { searchParams, pathname } = new URL(req.url, `http://${req.headers.host}`)
    const params = new URLSearchParams(searchParams)
    console.log(pathname, req.method)
    if (pathname === '/comics' && req.method === 'GET') {
        const readFile = await fs.readFile('comics.txt')
        res.write(readFile)
        res.end()
    }
    if (pathname === '/comics' && req.method === 'POST') {
        const readFile = await fs.readFile('comics.txt')
        const originalDataFile = JSON.parse(readFile)
        const id = uuidv4()
        let dataComic
        req.on('data', (data) => {
            dataComic = JSON.parse(data)
        })
        req.on('end', async () => {
            originalDataFile[id] = dataComic
            await fs.writeFile('comics.txt', JSON.stringify(originalDataFile, null, 2))
            res.write('Comic agregado exitosamente')
            res.end()
        })
    }
    if (pathname === '/comics' && req.method === 'PUT') {
        const id = params.get('id')
        const readFile = await fs.readFile('comics.txt')
        const originalDataFile = JSON.parse(readFile)
        let dataToEdit
        req.on('data', (data) => {
            dataToEdit = JSON.parse(data)
        })
        req.on('end', async () => {
            const originalComic = originalDataFile[id]
            const updatedComic = {...originalComic, ...dataToEdit}
            originalDataFile[id] = updatedComic
            
            await fs.writeFile('comics.txt', JSON.stringify(originalDataFile, null, 2))

            res.write(JSON.stringify(updatedComic, null, 2))
            res.end()
        })

    }
    if (pathname === '/comics' && req.method === 'DELETE') {
        const id = params.get('id')
        const readFile = await fs.readFile('comics.txt')
        const originalDataFile = JSON.parse(readFile)
        delete originalDataFile[id]

        await fs.writeFile('comics.txt', JSON.stringify(originalDataFile, null, 2))
        res.write('El comic ha sido eliminado exitosamente')
        res.end()

    }
})

.listen(3000, () => {
    console.log('Server UP http://localhost:3000')
})