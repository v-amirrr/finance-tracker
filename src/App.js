import React from 'react';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import Loader from './components/Loader';

import AuthContextProvider from './context/AuthContext';

import { AnimatePresence } from 'framer-motion';

const App = () => {

    const location = useLocation();

    return (
        <>
            <div>
                <AuthContextProvider>
                        <AnimatePresence>
                            <Routes location={location} key={location.key}>
                                <Route path='/' element={<Homepage />} />
                                <Route path='signup' element={<Signup />} />
                                <Route path='login' element={<Login />} />
                                <Route path='/loader' element={<Loader />} />
                                <Route path='/*' element={<Navigate to="/" />} />
                            </Routes>
                        </AnimatePresence>
                </AuthContextProvider>
            </div>
        </>
    );
};

export default App;