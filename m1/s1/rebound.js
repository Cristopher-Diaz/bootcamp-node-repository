const var1 = 'Variable 1'
const var2 = 'Variable 2'
console.log(var1)
console.log(var2)



var mascotasJson = [ 
    { 
        "nombre": "fluffy", 
        "mascota": "true", 
        "animal": "gato", 
        "edadHumana": "7" 
    }, 
    { 
        "nombre": "Balto", 
        "mascota": "true", 
        "animal": "perro", 
        "edadHumana": "11" 

    }, 
    { 
        "nombre": "Mandibulas", 
        "mascota": "false", 
        "animal": "tiburon", 
        "edadHumana": "50" 
    } 
]

const obj1 = {
    "nombre": "mascota1", 
    "mascota": "true", 
    "animal": "animal_mascota1", 
    "edadHumana": "5" 
}

const obj2 = {
    "nombre": "mascota2", 
    "mascota": "true", 
    "animal": "animal_mascota2", 
    "edadHumana": "3" 
}
console.log('Cantidad de objetos inicial: ' + mascotasJson.length)
mascotasJson.push(obj1, obj2)
console.log(mascotasJson)
console.log('Cantidad de objetos final: ' + mascotasJson.length)
