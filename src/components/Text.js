import React from 'react';

import { motion } from 'framer-motion';

const BtnTextVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.5 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, type: "tween" } },
    exit: { opacity: 0, x: -100, scale: 0.5, transition: { duration: 0.6, type: "tween" } }
}

const Loader = ({ text }) => {
    return (
        <>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={BtnTextVariants}>
                {text}
            </motion.div>
        </>
    );
};

export default Loader;