import React from 'react';

import { Link } from 'react-router-dom';

import { motion } from "framer-motion"

import styles from "./Homepage.module.css";

const homepageTextVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [10, -10, 0], transition: { delay: 1, duration: 0.4, type: "tween" } },
}

const homepageFooterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 1 } },
}

const Homepage = () => {
    return (
        <>
            <div className={styles["home-page"]}>
                <motion.div className={styles["homepage-text"]} initial="hidden" animate="visible" variants={homepageTextVariants}>
                    <h1>Fianace Tracker</h1>
                    <p>
                        (Just In Case, If You Ever Need A Goddamn Finance Tracker)
                        <br />
                        (And Trust Me, You Do Not)
                    </p>
                    <motion.div className={styles["homepage-start-btn"]} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/login">START</Link>
                    </motion.div>
                </motion.div>

                <motion.div className={styles["footer"]} whileHover={{ scale: 1.5, y: -10 }}  initial="hidden" animate="visible" variants={homepageFooterVariants}>
                    <p>Made With ❤ By <a href='https://github.com/v-amirrr' target="_blank" rel='noopener noreferrer'>ME</a>.</p>
                </motion.div>
            </div>
        </>
    );
};

export default Homepage;