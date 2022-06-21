import React from 'react';
import styles from "./Loader.module.css";

import { motion } from 'framer-motion';

const loaderVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.5 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, type: "tween" } },
    exit: { opacity: 0, x: -50, scale: 0.5, transition: { duration: 0.6, type: "tween" } }
}

const Loader = () => {
    return (
        <>
            <motion.div className={styles["lds-ellipsis"]} initial="hidden" animate="visible" exit="exit" variants={loaderVariants}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
            </motion.div>
        </>
    );
};

export default Loader;