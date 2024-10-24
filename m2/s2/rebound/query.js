const mysql = require('mysql2/promise')
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,              // Opcional, número máximo de conexiones
    queueLimit: 0                     // Opcional, límite de consultas en espera
})


async function getUserByID(age) {

    const query = 'SELECT * FROM students WHERE age > ?'
    try {
        const [rows, fields] = await pool.query(query, [age])
        console.log(rows)
    } catch (error) {
        console.error('Error fetching students:', error)
    }
}

async function getUserByLastName() {

    const query = 'SELECT * FROM students ORDER BY last_name DESC'
    try {
        const [rows, fields] = await pool.query(query)
        console.log(rows)
    } catch (error) {
        console.error('Error fetching students:', error)
    }
}

async function getAvailableCourses() {

    const query = 'SELECT * FROM courses WHERE deleted_at IS NULL'
    try {
        const [rows, fields] = await pool.query(query)
        console.log(rows)
    } catch (error) {
        console.error('Error fetching courses:', error)
    }
}

async function main() {
    console.log('USUARIOS EDAD MAYOR A 25')
    await getUserByID(25)

    console.log('\n TODOS LOS USUARIOS ORDENADOS POR APELLIDO')
    await getUserByLastName()

    console.log('\n TODOS LOS CURSOS DISPONIBLES')
    await getAvailableCourses()

    // Cerrar el pool al final de todas las consultas
    await pool.end()
}


main().catch(error => {
    console.error('Error in main function:', error)
})