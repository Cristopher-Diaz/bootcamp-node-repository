const pool = require('./db')

async function insertUser () {
    try {
        const [email, firstName, lastName, age, role, pass] = process.argv.slice(2)
        
        // Validación de datos
        if (!email || !firstName || !lastName || !age || !role || !pass) {
            console.error("Todos los datos del usuario son requeridos.")
            return
        }

        const fullName = `${firstName} ${lastName}`
        // Consulta 
        const query = `
            INSERT INTO users (email, first_name, last_name, full_name, age, role, pass)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `

        // Ejecución
        const [result] = await pool.query(query, [email, firstName, lastName, fullName, age, role, pass])
        console.log(`Usuario insertado con ID: ${result.insertId}`)
    } catch (error) {
        console.error("Error al insertar el usuario:", error)
    }
}

insertUser()