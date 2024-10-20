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

async function getUsers() {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM users')
        console.log(rows)
    } catch (error) {
        console.error('Error fetching users:', error)
    }
}

getUsers()
