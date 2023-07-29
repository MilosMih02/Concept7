import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/todoStyle.css';

const Todo = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [formData, setFormData] = useState({ title: '', contents: '' });
    const [formError, setFormError] = useState({ title: false, contents: false });

    // Fetch Todo items from the backend on component mount
    useEffect(() => {
        fetchTodoItems();
    }, []);

    const fetchTodoItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/get-data');
            setTodoItems(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // Check if both title and contents are filled before submitting
        if (formData.title.trim() === '' || formData.contents.trim() === '') {
            setFormError({ title: formData.title.trim() === '', contents: formData.contents.trim() === '' });
            return;
        }

        try {
            // Make a POST request to the backend to save the data
            await axios.post('http://localhost:5000/api/save-data', formData);
            // Clear the form data after successful submission
            setFormData({ title: '', contents: '' });
            // Fetch the updated Todo items after creating a new one
            fetchTodoItems();
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            // Make the DELETE request to the backend
            await axios.delete(`http://localhost:5000/api/delete-data/${id}`);
            // Fetch the updated Todo items after deletion
            fetchTodoItems();
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <form onSubmit={handleFormSubmit} className="input-container">
                <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    // Add a class to style the input field border based on the error state
                    className={formError.title ? 'error' : ''}
                />
                {formError.title && <p className="error-message">Please enter a title</p>}
                <input
                    type="text"
                    placeholder="Contents"
                    value={formData.contents}
                    onChange={(e) => setFormData({ ...formData, contents: e.target.value })}
                    // Add a class to style the input field border based on the error state
                    className={formError.contents ? 'error' : ''}
                />
                {formError.contents && <p className="error-message">Please enter contents</p>}
                <button className={"button button1"} type="submit">Add Todo</button>
            </form>
            <ul className="todo-list">
                {todoItems.map((item) => (
                    <li key={item.id} className="todo-item">
                        <div className="todo-item-details">
                            <p>Todo number: {item.id}</p>
                            <p className={"title"}>{item.title}</p>
                            <p>{item.contents}</p>
                        </div>
                        <button className="button button2" onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;