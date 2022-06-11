import React, { useContext } from 'react';
import styles from "./Loading.module.css";

import { LoadingShow } from '../context/LoadingShowContextProvider';

import { motion, AnimatePresence } from 'framer-motion';

const loadingPageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, type: "tween" } },
    exit: {opacity: 0, transition: { duration: 0.4, type: "tween" }}
}

const Loading = () => {

    const LoadingShowContext = useContext(LoadingShow);

    return (
        <>
            <AnimatePresence>        
            {
                LoadingShowContext.show 
                ? 
                <motion.div className={styles["loading-section"]} initial="hidden" animate="visible" exit="exit" variants={loadingPageVariants}>
                <div class="loading">
                    <div class={styles["loading-text"]}>
                        <span class="loading-text-words">L</span>
                        <span class="loading-text-words">O</span>
                        <span class="loading-text-words">A</span>
                        <span class="loading-text-words">D</span>
                        <span class="loading-text-words">I</span>
                        <span class="loading-text-words">N</span>
                        <span class="loading-text-words">G</span>
                    </div>
                </div>
                </motion.div> 
                : 
                ""
            }
            </AnimatePresence>
        </>
    );
};

export default Loading;