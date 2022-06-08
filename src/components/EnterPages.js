import React from 'react';

import { useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import styles from "./EnterPages.module.css";

import Login from './Login';
import Signup from './Signup';

const EnterPages = () => {
    
    const location = useLocation();

    return (
        <>
            <AnimatePresence>
                <div className={styles["homepage"]}>
                    {
                        location.pathname === "/signup" ? <Signup /> : <Login />
                    }
                </div>
            </AnimatePresence>
        </>
    );
};

export default EnterPages;