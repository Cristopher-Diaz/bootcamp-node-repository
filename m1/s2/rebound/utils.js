import { returnLength } from './config.js'

function concatStrings(objString) {
    const { str_1, str_2 } = objString
    const fullStr = str_1 + str_2
    return returnLength ? fullStr.length : fullStr
}

export default concatStrings