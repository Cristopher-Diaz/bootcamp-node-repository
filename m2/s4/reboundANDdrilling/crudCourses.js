const pool = require('./db')
// 1. Ingreso de datos en la tabla Cursos
async function addCourse(title, description) {
    try {
        const query = `INSERT INTO courses (title, description) VALUES (?, ?)`
        const [result] = await pool.query(query, [title, description])
        console.log(`Curso agregado con ID: ${result.insertId}`)
    } catch (error) {
        console.error("Error al agregar el curso:", error)
    }
}

// 2. Consulta de datos de la tabla Cursos
async function getCourses() {
    try {
        const query = `SELECT * FROM courses WHERE deleted_at IS NULL`
        const [rows] = await pool.query(query)
        console.table(rows)
    } catch (error) {
        console.error("Error al consultar cursos:", error)
    }
}

// 3. Actualización de datos en la tabla Cursos
async function updateCourse(id, title, description) {
    try {
        const query = `UPDATE courses SET title = ?, description = ? WHERE id = ?`
        const [result] = await pool.query(query, [title, description, id])
        console.log(`Curso con ID ${id} actualizado`)
    } catch (error) {
        console.error("Error al actualizar el curso:", error)
    }
}

// 4. Eliminación de datos en la tabla Cursos
async function deleteCourse(id) {
    try {
        const query = `
            UPDATE courses SET 
            deleted_at = NOW()
            WHERE id = ?
        `
        const [result] = await pool.query(query, [id])
        console.log(`Curso con ID ${id} eliminado`)
    } catch (error) {
        console.error("Error al eliminar el curso:", error)
    }
}

module.exports = { addCourse, getCourses, updateCourse, deleteCourse }
