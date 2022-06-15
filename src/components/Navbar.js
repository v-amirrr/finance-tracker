import React from 'react';
import styles from "./Navbar.module.css";

import { useLogout } from "../hooks/useLogout";

import { motion } from 'framer-motion';

const navbarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: [-10, 10, 0], transition: { delay: 0.4, duration: 0.4, type: "tween", when: "beforeChildren" } },
    exit: {opacity: 0, y: -10, transition: { duration: 0.4, type: "tween" }}
}

const navbarTitleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, x: -100, transition: { duration: 0.4, type: "tween" }}
}

const navbarBtnVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, x: 100, transition: { duration: 0.4, type: "tween" }}
}

const Navbar = () => {

    const { logout } = useLogout();

    return (
        <>
            <motion.div className={styles["navbar"]} initial="hidden" animate="visible" exit="exit" variants={navbarVariants}>
                <motion.div variants={navbarTitleVariants}>
                    <h1>Fianace Tracker</h1>
                </motion.div>

                <motion.div variants={navbarBtnVariants}>
                    <motion.button onClick={logout} whileTap={{ scale: 0.9 }}>Logout</motion.button>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Navbar;