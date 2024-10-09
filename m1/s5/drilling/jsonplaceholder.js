const fetchData = require('./fetchData')

// Leer argumentos de la línea de comandos
const args = process.argv.slice(2)

const endpoints = ['comments', 'photos', 'albums', 'todos', 'posts']

if (args.length === 1 && endpoints.includes(args[0])) {
  const endpoint = args[0]
  fetchData(endpoint, endpoint) // Llama a la función con el endpoint y el archivo de salida correspondiente
} else {
  console.log('Uso incorrecto del programa.')
  console.log('Ejemplos de uso:')
  console.log('  node jsonplaceholder.js comments')
  console.log('  node jsonplaceholder.js posts')
  console.log('  node jsonplaceholder.js todos')
}
