import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import EnterPages from './components/EnterPages';

const App = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='signup' element={<EnterPages />} />
                    <Route path='login' element={<EnterPages />} />
                </Routes>
            </div>
        </>
    );
};

export default App;