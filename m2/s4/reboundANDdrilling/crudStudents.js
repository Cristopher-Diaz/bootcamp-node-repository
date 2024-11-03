const pool = require('./db')

// 1. Ingreso de datos en la tabla Estudiantes
async function addStudent(first_name, last_name, age, n_identity) {
    try {
        const query = `INSERT INTO students (first_name, last_name, age, n_identity) VALUES (?, ?, ?, ?)`
        const [result] = await pool.query(query, [first_name, last_name, age, n_identity])
        console.log(`Estudiante agregado con ID: ${result.insertId}`)
    } catch (error) {
        console.error("Error al agregar el estudiante:", error)
    }
}

// 2. Consulta de datos de la tabla Estudiantes
async function getStudents() {
    try {
        const query = `SELECT * FROM students WHERE deleted_at IS NULL`
        const [result] = await pool.query(query)
        console.table(result)
    } catch (error) {
        console.error("Error al consultar estudiantes:", error)
    }
}

// 3. Actualización de datos en la tabla Estudiantes
async function updateStudent(id, first_name, age) {
    try {
        const query = `UPDATE students SET first_name = ?, age = ? WHERE id = ?`
        const [result] = await pool.query(query, [first_name, age, id])
        console.log(`Estudiante con ID ${id} actualizado`)
    } catch (error) {
        console.error("Error al actualizar el estudiante:", error)
    }
}

// 4. Eliminación de datos en la tabla Estudiantes
async function deleteStudent(id) {
    try {
        const query = `
            UPDATE students SET 
            deleted_at = NOW()
            WHERE id = ?
        `
        const [result] = await pool.query(query, [id])
        console.log(`Estudiante con ID ${id} eliminado`)
    } catch (error) {
        console.error("Error al eliminar el estudiante:", error)
    }
}

module.exports = { addStudent, getStudents, updateStudent, deleteStudent }