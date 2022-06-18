import React from 'react';
import styles from "./BeforeLogin.module.css";

import { Link } from 'react-router-dom';

import Footer from './Footer';

import { motion } from "framer-motion"

const homepageTextVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [10, -10, 0], transition: { delay: 0.4, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: -10, transition: { duration: 0.4, type: "tween" }}
}

const BeforeLogin = () => {
    return (
        <>
            <div className={styles["home-page"]}>
                <motion.div className={styles["homepage-text"]} initial="hidden" animate="visible" exit="exit" variants={homepageTextVariants}>
                    <h1>Fianace Tracker</h1>
                    <p>
                        (Just In Case, If You Ever Need A Finance Tracker)
                    </p>
                    <Link to="/login">
                        <motion.div className={styles["homepage-start-btn"]} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link to="/login">START</Link>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </>
    );
};

export default BeforeLogin;