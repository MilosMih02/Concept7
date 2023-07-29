const express = require('express');
const router = express.Router();
const { getTodoItems, createTodoItem, deleteTodoItem } = require('../models/model');

router.get('/get-data', async (req, res) => {
    try {
        const todoItems = await getTodoItems();
        res.json(todoItems);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

router.post('/save-data', async (req, res) => {
    try {
        const { title, contents } = req.body;
        const newItem = await createTodoItem({ title, contents });
        res.json(newItem);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'An error occurred while saving data' });
    }
});

router.delete('/delete-data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await deleteTodoItem(id);

        if (deletedItem) {
            res.json(deletedItem);
        } else {
            // If no item was found, respond with 404
            res.status(404).json({ error: 'Todo item not found' });
        }
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ error: 'An error occurred while deleting data' });
    }
});

module.exports = router;