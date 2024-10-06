// const concatStrings = require('./utils');
import { nanoid } from 'nanoid'
import concatStrings from './utils.js'


const objString = {
    str_1: nanoid(),
    str_2: nanoid()
}
console.log(objString)

console.log(concatStrings(objString))