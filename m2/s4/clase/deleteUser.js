const pool = require('./db')

async function deleteUser() {
    try {
        const [id] = process.argv.slice(2)
        
        // Validación de datos
        if (!id) {
            console.error("El id es obligatorio.")
            return
        }
    
        // Consulta 
        const query = `
            UPDATE users SET 
            deleted_at = NOW()
            WHERE id = ?
        `
    
        // Ejecución
        const [result] = await pool.query(query, [id])
        console.log(`Usuario con ID: ${id} ha sido eliminado con exito`)
    } catch (error) {
        console.error("Error al eliminar el usuario:", error)
    }
}

deleteUser()