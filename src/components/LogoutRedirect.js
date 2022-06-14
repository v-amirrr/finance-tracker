import React from 'react';
import styles from "./LogoutRedirect.module.css";

import { useNavigate } from 'react-router-dom';

import { useLogout } from '../hooks/useLogout';

import { motion } from 'framer-motion';

const logoutRedirectVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [-10, 10, 0], transition: { delay: 0.4, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: 10, transition: { duration: 0.4, type: "tween" }}
}

const LogoutRedirect = () => {

    const { logout } = useLogout();
    const navigate = useNavigate();

    return (
        <>
            <motion.div className={styles["logout"]} initial="hidden" animate="visible" exit="exit" variants={logoutRedirectVariants}>
                <h1>Finance Tracker</h1>
                <p>You're already logged in. You want to create another account or login with another account?</p>
                <p>You need to first logout from your current account.</p>
                <motion.button onClick={logout} whileTap={{ scale: 0.9 }}>Logout From Your Current Account</motion.button>
            </motion.div>
        </>
    );
};

export default LogoutRedirect;