import React from 'react';
import styles from "./BeforeLogin.module.css";

import { Link } from 'react-router-dom';

import Footer from './Footer';

import { motion } from "framer-motion"

const beforeLoginVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: "tween" } },
    exit: { opacity: 0, transition: { duration: 0.4, type: "tween" } }
};

const BeforeLogin = () => {
    return (
        <>
            <div className={styles["before-login"]}>
                <motion.div className={styles["before-login-text"]} initial="hidden" animate="visible" exit="exit" variants={beforeLoginVariants}>
                    <h1>Fianace Tracker</h1>
                    <Link to="/login">
                        <motion.div className={styles["btn"]} whileTap={{ scale: 0.9 }}>
                            let's start
                        </motion.div>
                    </Link>
                </motion.div>
                <Footer />
            </div>
        </>
    );
};

export default BeforeLogin;