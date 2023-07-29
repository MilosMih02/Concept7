const { Pool } = require('pg');

// PostgreSQL configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: 'MyDB01',
    port: 5432,
});

const getTodoItems = async () => {
    try {
        const query = 'SELECT * FROM notes';
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const createTodoItem = async ({ title, contents }) => {
    try {
        const query = 'INSERT INTO notes (title, contents) VALUES ($1, $2) RETURNING *';
        const values = [title, contents];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }
};

const deleteTodoItem = async (itemId) => {
    try {
        const query = 'DELETE FROM notes WHERE id = $1 RETURNING *';
        const values = [itemId];
        const result = await pool.query(query, values);

        // Check if any rows were deleted
        if (result.rows.length === 0) {
            return null; // Item not found, return null
        }

        return result.rows[0]; // Return the deleted item
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};

module.exports = {
    getTodoItems,
    createTodoItem,
    deleteTodoItem,
};