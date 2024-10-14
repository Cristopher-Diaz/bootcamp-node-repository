const chai = require('chai')
const chaiHttp = require('chai-http')
const { servidor } = require('../index')
// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import { servidor } from '../index.js';

chai.use(chaiHttp)

describe('Probando respuesta de servidor para metodo POST /comics', () => {
    it('Comprobando que metodo POST responde con codigo 200', (done) => {
        chai
            .request(servidor)
            .post('/comics')
            .send({
                "titulo": "Capitan America",
                "autor": "Stan Lee",
                "issn": "4455677",
                "cantidad": 240
            })
            .end((err, res) =>{
                chai.expect(res).to.have.status(200)
                done()
            })
    })
})