import React from 'react';
import styles from "./Loader.module.css";

import { motion } from 'framer-motion';

const loaderVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, type: "tween" } },
    exit: {opacity: 0, transition: { duration: 1, type: "tween" }}
}

const Loader = () => {
    return (
        <>
            <motion.div className={styles["loader"]} initial="hidden" animate="visible" exit="exit" variants={loaderVariants}>
                <div className={styles["lds-ellipsis"]}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </motion.div>
        </>
    );
};

export default Loader;