var moment = require('moment')
var config = require('./config')



function queDiaFue(dias, idioma) {
    // para setear en español
    moment.locale(config.idiomas[idioma])
    return moment().subtract(dias, 'days').calendar()
}

module.exports = {queDiaFue}