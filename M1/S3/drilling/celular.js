// celular.js
const moment = require('moment');

const celular = {
  marca: "Samsung",
  modelo: "Galaxy S21",
  color: "Negro",
  almacenamiento: "128GB",
  ram: "8GB",
  fechaCompra: moment().format('YYYY-MM-DD')
};

module.exports = celular;  // Exporta el objeto celular directamente


