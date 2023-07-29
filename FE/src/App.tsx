import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Todo from './routes/Todo';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Todo" element={<Todo />} />
            </Routes>
        </div>
    );
};

export default App;