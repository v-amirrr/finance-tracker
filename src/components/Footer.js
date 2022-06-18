import React from 'react';
import styles from "./Footer.module.css";

import { useLocation } from 'react-router-dom';

import useAuthContext from '../hooks/useAuthContext';

import { motion, AnimatePresence } from 'framer-motion';

const homepageFooterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1 } },
    exit: { opacity: 0, transition: { duration: 0.4, type: "tween" } }
}

const Footer = () => {

    const location = useLocation();
    const { user } = useAuthContext();

    return (
        <>
            <AnimatePresence location={location} key={location.key}>
                <motion.div className={user ? styles["footer-afterlogin"] : styles["footer-beforelogin"]} initial="hidden" animate="visible" variants={homepageFooterVariants} exit="exit">
                    <p>Made With <span className={styles["red-heart"]}>❤</span> By <a className='link' href='https://github.com/v-amirrr' target="_blank" rel='noopener noreferrer'>ME</a>.</p>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default Footer;