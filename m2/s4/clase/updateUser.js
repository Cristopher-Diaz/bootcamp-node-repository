const pool = require('./db')

async function updateEmailUser() {
    try {
        const [id, email] = process.argv.slice(2)
        
        // Validación de datos
        if (!id || !email) {
            console.error("Todos los datos son requeridos.")
            return
        }
    
        // Consulta 
        const query = `
            UPDATE users SET 
            email = ?
            WHERE id = ?
        `
    
        // Ejecución
        const [result] = await pool.query(query, [email, id])
        console.log(`Usuario insertado con ID: ${id} ha cambiado su email a: ${email}`)
    } catch (error) {
        console.error("Error al insertar el usuario:", error)
    }
}

updateEmailUser()