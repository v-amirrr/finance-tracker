import React, { useState } from 'react';
import styles from "./Popup.module.css";

import { motion, AnimatePresence } from 'framer-motion';

import { GrFormClose } from "react-icons/gr";

const popupVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, type: "tween" } },
    exit: {opacity: 0, y:-50, transition: { duration: 1, type: "tween" }}
}

const Popup = ({ text }) => {

    const [close, setClose] = useState(false);

    return (
        <>
            <motion.div className={close ? styles["popup-close"] : styles["popup"]} initial="hidden" animate="visible" exit="exit" variants={popupVariants}>
                <p>{text}</p>
                <i onClick={() => setClose(true)}><GrFormClose color='#fff' /></i>
            </motion.div>
        </>
    );
};

export default Popup;