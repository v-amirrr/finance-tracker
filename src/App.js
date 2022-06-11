import React, { useContext } from 'react';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import Loading from './components/Loading';

import LoadingShowContextProvider from './context/LoadingShowContextProvider';

import { AnimatePresence } from 'framer-motion';

const App = () => {

    const location = useLocation();

    return (
        <>
            <div>
                <LoadingShowContextProvider>
                    <AnimatePresence>
                        <Routes location={location} key={location.key}>
                            <Route path='/' element={<Homepage />} />
                            <Route path='signup' element={<Signup />} />
                            <Route path='login' element={<Login />} />
                            <Route path='/*' element={<Navigate to="/" />} />
                        </Routes>
                        <Loading />
                    </AnimatePresence>
                </LoadingShowContextProvider>
            </div>
        </>
    );
};

export default App;