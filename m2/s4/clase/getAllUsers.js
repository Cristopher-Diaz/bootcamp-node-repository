const pool = require('./db')

async function getAllUsers () {
    try {
        const query = 'SELECT * FROM users'
        const [result] = await pool.query(query)
        console.table(result)
    } catch (error) {
        console.error('Error fetching users:', error)
    }
}

getAllUsers()