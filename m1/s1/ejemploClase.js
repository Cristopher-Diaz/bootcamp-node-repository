console.log("Hola Node")

let count = 0
function showCounter() {
    count++
    console.log('Este es el segundo', count)
}

setInterval(showCounter, 1000)