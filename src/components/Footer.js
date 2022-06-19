import React from 'react';
import styles from "./Footer.module.css";

import { motion } from 'framer-motion';

const homepageFooterVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.9, transition: { duration: 0.4, type: "tween" } },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, delay: 1.2, type: "tween" } },
    exit: { opacity: 0, y: -10, scale: 0.9, transition: { duration: 0.4, type: "tween" } }
}

const Footer = () => {
    return (
        <>
                <motion.div className={styles["footer"]} initial="hidden" animate="visible" variants={homepageFooterVariants} exit="exit">
                    <p>Made With <span className={styles["red-heart"]}>❤</span> By <a className='link' href='https://github.com/v-amirrr' target="_blank" rel='noopener noreferrer'>ME</a>.</p>
                </motion.div>
        </>
    );
};

export default Footer;