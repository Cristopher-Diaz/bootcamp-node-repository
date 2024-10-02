const { autos, animales } = require('./datos')
const _ = require('lodash')

const uniqAutos = _.uniq(autos)
console.log(uniqAutos)

const animalesSalvajes = _.filter(animales, { tipo: 'salvaje' })

console.log(animalesSalvajes)