import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Homepage from './components/Homepage';
// import EnterPages from './components/EnterPages';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
    const location = useLocation();
    return (
        <>
            <div>
                <AnimatePresence>
                    <Routes location={location} key={location.key}>
                        <Route path='/' element={<Homepage />} />
                        <Route path='signup' element={<Signup />} />
                        <Route path='login' element={<Login />} />
                        <Route path='/*' element={<Navigate to="/" />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </>
    );
};

export default App;