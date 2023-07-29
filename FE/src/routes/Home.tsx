import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
        <div className="p-4">
            <main>
                <h1 className="text-2xl font-bold mb-4">Welcome to the App</h1>
                {/* Your Todo app content */}
            </main>
        </div>
    );
};

export default Home;