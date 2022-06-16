import React from 'react';
import styles from "./Popup.module.css";

import { motion } from 'framer-motion';

const popupVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, type: "tween" } },
    exit: {opacity: 0, y:-50, transition: { duration: 1, type: "tween" }}
}

const Popup = ({ text }) => {

    return (
        <>
            <motion.div className={styles["popup"]} initial="hidden" animate="visible" exit="exit" variants={popupVariants}>
                <p>{text}</p>
            </motion.div>
        </>
    );
};

export default Popup;