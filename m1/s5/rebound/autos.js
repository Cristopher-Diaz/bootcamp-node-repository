const fs = require('fs')
const path = './autos.json' // Ruta del archivo JSON

// Leer los argumentos de la línea de comandos
const args = process.argv.slice(2) // Ignoramos los dos primeros argumentos

// Función para leer el archivo JSON
function leerArchivo() {
  const data = fs.readFileSync(path, 'utf8')
  return JSON.parse(data)
}

// Función para escribir el archivo JSON
function escribirArchivo(contenido) {
  fs.writeFileSync(path, JSON.stringify(contenido, null, 2), 'utf8')
}

// Opción para leer todo el archivo o un auto en particular
function leer(auto) {
  const autos = leerArchivo()

  if (auto) {
    // Validar si el auto existe en los datos
    if (autos[auto]) {
      console.log(autos[auto])
    } else {
      console.log(`El auto "${auto}" no existe en los datos.`)
    }
  } else {
    // Leer todo el archivo
    console.log(autos)
  }
}

// Opción para modificar una propiedad de un auto
function modificar(auto, propiedad, valor) {
  const autos = leerArchivo()

  // Validar si el auto existe
  if (autos[auto]) {
    // Modificar o agregar la propiedad
    autos[auto][propiedad] = isNaN(valor) ? valor : parseInt(valor, 10)
    escribirArchivo(autos)
    console.log(`Auto "${auto}" actualizado con éxito.`)
  } else {
    console.log(`El auto "${auto}" no existe en los datos.`)
  }
}

// Validar argumentos de la línea de comandos
if (args[0] === 'leer') {
  if (args[1]) {
    leer(args[1]) // Leer las características de un auto en particular
  } else {
    leer() // Leer todo el archivo
  }
} else if (args.length === 3) {
  modificar(args[0], args[1], args[2]) // Modificar una propiedad de un auto
} else {
  console.log('Uso incorrecto del programa.')
  console.log('Para leer el archivo completo: node autos.js leer')
  console.log('Para leer solo un auto: node autos.js leer [nombre_auto]')
  console.log('Para modificar una propiedad: node autos.js [nombre_auto] [propiedad] [valor]')
}
