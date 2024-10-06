const axios = require('axios')

const apiAllCountries = 'https://restcountries.com/v3.1/all'
const apiChile = 'https://restcountries.com/v3.1/name/chile'

const getCountryTHEN = () => {
    axios.get(apiChile).then(resp => {
        console.log(resp.data)
    })
}

const getCountryASYNC = async () => {
    const { data } = await axios.get(apiChile)
    console.log(data)
}


// getCountryTHEN()
getCountryASYNC()


console.log('Hola hola')