const moment = require('moment');
const _ = require('lodash');


const { marca, modelo, color, almacenamiento, ram, fechaCompra } = require('./celular');

// Función para mostrar la descripción del celular
function mostrarDescripcion() {
    console.log(`Tengo un ${marca} ${modelo}, de color ${color}, con ${almacenamiento} de almacenamiento y ${ram} de RAM. Lo compré el ${fechaCompra}.`);
}

mostrarDescripcion();

// Ejemplo de función de callback
const procesarDatosCelular = (callback) => {
    console.log("Procesando datos del celular...");
    callback();
};

procesarDatosCelular(() => {
    console.log("Datos del celular procesados correctamente.");
});

