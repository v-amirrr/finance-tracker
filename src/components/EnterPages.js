import React from 'react';

import { useLocation } from 'react-router-dom';

import styles from "./EnterPages.module.css";

import Login from './Login';
import Signup from './Signup';

const EnterPages = () => {
    
    const location = useLocation();

    return (
        <>
            <div className={styles["homepage"]}>
                {
                    location.pathname === "/signup" ? <Signup /> : <Login />
                }
            </div>
        </>
    );
};

export default EnterPages;