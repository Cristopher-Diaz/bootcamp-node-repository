// Alcance de var, let, const
function testScope() {
    if (true) {
        var variableVar = "Soy var";
        let variableLet = "Soy let";
        const variableConst = "Soy const";
    }

    console.log(variableVar);  // Funciona porque var tiene alcance de función o global
    console.log(variableLet);  // Error, let tiene alcance de bloque
    console.log(variableConst); // Error, const tiene alcance de bloque
}

// testScope();

function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3));  // Resultado: 8

const sumarFlecha = (a, b) => a + b;

console.log(sumarFlecha(5, 3));  // Resultado: 8

const animal = {
    tipo: "Perro",
    nombre: "Firulais",
    edad: 3,
    color: "Café",
    raza: "Labrador"
};

function describirAnimal({ tipo, nombre, edad, color, raza }) {
    return `Este es un ${tipo} llamado ${nombre}. Tiene ${edad} años, es de color ${color} y es de raza ${raza}.`;
}

console.log(describirAnimal(animal));
// Resultado: "Este es un Perro llamado Firulais. Tiene 3 años, es de color Café y es de raza Labrador."

const animalActualizado = {
    ...animal,
    edad: 4,  // Actualización
    color: "Negro",  // Actualización
    peso: "30kg",  // Nuevo campo
    vacunado: true  // Nuevo campo
};

console.log(animalActualizado);
/*
{
  tipo: "Perro",
  nombre: "Firulais",
  edad: 4,
  color: "Negro",
  raza: "Labrador",
  peso: "30kg",
  vacunado: true
}
*/

const valoresAnimal = Object.values(animalActualizado);

for (const valor of valoresAnimal) {
    console.log(valor);
}

// Resultado en consola:
// "Perro"
// "Firulais"
// 4
// "Negro"
// "Labrador"
// "30kg"
// true


