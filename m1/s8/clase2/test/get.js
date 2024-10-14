const chai = require('chai')
const chaiHttp = require('chai-http')
const { servidor } = require('../index')
// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import { servidor } from '../index.js';

chai.use(chaiHttp)

describe('Probando respuesta de servidor para metodo GET /comics', () => {
    it('Comprobando que metodo GET responde con codigo 200', (done) => {
        chai.request(servidor).get('/comics').end((err, res) =>{
            chai.expect(res).to.have.status(200)
            done()
        })
    })
})