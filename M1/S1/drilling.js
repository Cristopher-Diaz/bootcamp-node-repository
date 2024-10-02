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
    },
    {
        "nombre": "mascota1", 
        "mascota": "true", 
        "animal": "animal_mascota1", 
        "edadHumana": "5" 
    },
    {
        "nombre": "mascota2", 
        "mascota": "true", 
        "animal": "animal_mascota2", 
        "edadHumana": "3" 
    }
]

for (let i = mascotasJson.length; i > 0; i--) {
    console.log(`El arreglo tiene ${mascotasJson.length} items`)
    mascotasJson.pop();
}

console.log("Ya no quedan ítems en el arreglo.")