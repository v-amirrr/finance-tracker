import React from 'react';
import styles from "./LogoutConfirmation.module.css";

import Popup from './Popup';

import { useNavigate, Navigate } from 'react-router-dom';

import useAuthContext from '../hooks/useAuthContext';

import { useLogout } from "../hooks/useLogout";

import { motion, AnimatePresence } from 'framer-motion';

const confirmationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, type: "tween", when: "beforeChildren" } },
    exit: { opacity: 0, transition: { duration: 0.2, type: "tween", when: "afterChildren" } }
}

const confirmatioPVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, delay: 0.2, type: "tween" } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.4, type: "tween" } }
}

const confirmatioBtnVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, delay: 0.4, type: "tween" } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.4, type: "tween" } }
}

const LogoutConfirmation = () => {

    const { user } = useAuthContext();
    const { logout, error } = useLogout();

    const navigate = useNavigate();

    return (
        <>
            {
                user
                ? 
                <motion.div className={styles["logout-confirmation"]} initial="hidden" animate="visible" exit="exit" variants={confirmationVariants}>
                    <motion.p variants={confirmatioPVariants}>Are You Srue That You Want To Logout From Your Account{user && `, ${user.displayName}`}?</motion.p>
                    <motion.div className={styles["buttons"]} variants={confirmatioBtnVariants}>
                        <motion.div onClick={logout} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Logout</motion.div>
                        <motion.div onClick={() => navigate("/")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Go Back To Home</motion.div>
                    </motion.div>

                    <AnimatePresence>
                        {error && <Popup text={error} />}
                    </AnimatePresence>

                </motion.div>
                :
                <motion.div className={styles["logout-confirmation"]} initial="hidden" animate="visible" exit="exit" variants={confirmationVariants}>
                    <motion.p variants={confirmatioPVariants}>You haven't logged in yet.</motion.p>
                    <motion.div className={styles["buttons"]} variants={confirmatioBtnVariants}>
                        <motion.div onClick={() => navigate("/login")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Login</motion.div>
                        <motion.div onClick={() => navigate("/")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Go Back To Home</motion.div>
                    </motion.div>
                </motion.div>
            }
        </>
    );
};

export default LogoutConfirmation;