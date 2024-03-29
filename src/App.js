import React from 'react';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Loader from './components/Loader';
import HomePages from './components/HomePages';
import LogoutConfirmation from './components/LogoutConfirmation';
import WarningPopup from "./components/WarningPopup";

import AuthContextProvider from './context/AuthContext';

import { AnimatePresence } from 'framer-motion';

const App = () => {

    const location = useLocation();

    return (
        <>
            <AuthContextProvider>
                    <AnimatePresence exitBeforeEnter>
                        <WarningPopup />
                        <Routes location={location} key={location.key}>
                            <Route path='/' element={<HomePages />} />
                            <Route path='signup' element={<Signup />} />
                            <Route path='login' element={<Login />} />
                            <Route path='/loader' element={<Loader />} />
                            <Route path="/logout-confirmation" element={<LogoutConfirmation />} />
                            <Route path='/*' element={<Navigate to="/" />} />
                        </Routes>
                    </AnimatePresence>
            </AuthContextProvider>
        </>
    );
};

export default App;