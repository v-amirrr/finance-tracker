import React, { useState, useEffect } from 'react';

import styles from "./WarningPopup.module.css";

import { motion, AnimatePresence } from 'framer-motion';

const popUpPageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, type: 'tween', when: "beforeChildren", childrenDelay: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2, type: 'tween', when: "afterChildren" } }
};

const popUpContainerVariants = {
    visible: { transition: { staggerChildren: 0.08 } },
    exit: { transition: { staggerChildren: 0.02 } }
};

const popUpItemVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, type: 'tween' } },
    exit: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.25, type: 'tween' } }
};

const WarningPopup = () => {

    const [vpn, setVpn] = useState(false);

    useEffect(() => {
        if (!!sessionStorage.getItem("vpn") == true) {
            setVpn(false);
        } else {
            setVpn(true);
        }
    }, []);
    
    const vpnPopUpSubmitHandler = e => {
        e.preventDefault();
        setVpn(false);
        sessionStorage.setItem("vpn", "true");
    };
    
    return (
        <>
            <AnimatePresence>
                {
                    vpn
                    &&
                    <motion.section className={styles["popup-page"]} initial='hidden' animate='visible' exit='exit' variants={popUpPageVariants}>
                        <motion.div className={styles["popup-container"]} variants={popUpContainerVariants}>
                            <form>
                                <motion.h1 variants={popUpItemVariants} className={styles["popup-title"]}>things you need to know</motion.h1>
                                <motion.p variants={popUpItemVariants} className={styles["popup-warning"]}>if you're in sanctioned countries like <b>iran</b>, you have to turn on your <b>VPN</b> for using the app.</motion.p>
                                <motion.p variants={popUpItemVariants} className={styles["popup-text"]}>
                                    in this app you can create an account and store your transactions. each transition contains a name and an amount. also you can delete them as well.
                                </motion.p>
                                <motion.button variants={popUpItemVariants} type="submit" whileTap={{ scale: 0.9 }} className={styles["popup-button"]} onClick={vpnPopUpSubmitHandler}>let's go</motion.button>
                            </form>
                        </motion.div>
                    </motion.section>
                }
            </AnimatePresence>
        </>
    );
};

export default WarningPopup;