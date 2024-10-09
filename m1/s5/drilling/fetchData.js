const fs = require('fs')
const axios = require('axios')

// Función para obtener datos de la API y guardarlos en un archivo
async function fetchData(endpoint, file) {
  const url = `https://jsonplaceholder.typicode.com/${endpoint}`

  try {
    const response = await axios.get(url) // Usamos axios para obtener los datos
    const data = response.data // Con axios, los datos están en `response.data`

    // Escribir los datos en el archivo especificado
    fs.writeFileSync(`./output/${file}.txt`, JSON.stringify(data, null, 2), 'utf8')
    console.log(`Datos de ${endpoint} guardados en ${file}.txt`)
  } catch (error) {
    console.error(`Error al obtener los datos de ${endpoint}:`, error.message)
  }
}

module.exports = fetchData
