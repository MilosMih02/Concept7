// index.tsx (or your main rendering file)

import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM, not createRoot
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Use ReactDOM.render as before
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);