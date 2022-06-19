import React from 'react';
import styles from "./LogoutConfirmation.module.css";

import { useNavigate } from 'react-router-dom';

import useAuthContext from '../hooks/useAuthContext';

import { useLogout } from "../hooks/useLogout";

import { motion } from 'framer-motion';

const confirmationVariants = {
    hidden: { opacity: 0, transition: { duration: 0.8, type: "tween", when: "beforeChildren" } },
    visible: { opacity: 1, transition: { duration: 0.2, delay: 1, type: "tween" } },
    exit: { opacity: 0, transition: { duration: 0.8, type: "tween", when: "afterChildren" } }
}

const confirmatioPVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, delay: 1.2, type: "tween" } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.4, type: "tween" } }
}

const confirmatioBtnVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, delay: 1.4, type: "tween" } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.4, type: "tween" } }
}

const LogoutConfirmation = () => {

    const { user } = useAuthContext();
    const { logout, error } = useLogout();

    const navigate = useNavigate();

    return (
        <>
            <motion.div className={styles["logout-confirmation"]} initial="hidden" animate="visible" exit="exit" variants={confirmationVariants}>
                <motion.p initial="hidden" animate="visible" exit="exit" variants={confirmatioPVariants}>Are You Srue That You Want To Logout From Your Account, {user && user.displayName}?</motion.p>
                <motion.div className={styles["buttons"]} initial="hidden" animate="visible" exit="exit" variants={confirmatioBtnVariants}>
                    <motion.div onClick={logout} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Yes, Logout.</motion.div>
                    <motion.div onClick={() => navigate("/")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>No, Take Me Back To The Home Page.</motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default LogoutConfirmation;